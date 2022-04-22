import { useState } from 'react';
import { Loading } from '@alifd/next';
import { buildComponents, AssetLoader } from '@alilc/lowcode-utils';
import ReactRenderer from '@alilc/lowcode-react-renderer';
import { injectComponents } from '@alilc/lowcode-plugin-inject';
import { useParams } from 'ice';
import { getLSName } from '../Design/plugins/utils';

export default () => {
  const { pageId }: any = useParams();
  const [data, setData] = useState<any>({});

  async function init() {
    const packages = JSON.parse(localStorage.getItem(getLSName(pageId, 'packages')) || '');
    const projectSchema = JSON.parse(localStorage.getItem(getLSName(pageId)) || '');
    const { componentsMap: componentsMapArray, componentsTree } = projectSchema;
    const componentsMap: any = {};
    componentsMapArray.forEach((component: any) => {
      componentsMap[component.componentName] = component;
    });
    const schema = componentsTree[0];

    const libraryMap = {};
    const libraryAsset: any[] = [];
    packages.forEach(({ package: _package, library, urls, renderUrls }) => {
      libraryMap[_package] = library;
      if (renderUrls) {
        libraryAsset.push(renderUrls);
      } else if (urls) {
        libraryAsset.push(urls);
      }
    });
    const assetLoader = new AssetLoader();
    await assetLoader.load(libraryAsset);
    const components = await injectComponents(
      buildComponents(libraryMap, componentsMap, () => {
        return null;
      }),
    );

    setData({
      schema,
      components,
    });
  }

  const { schema, components } = data;

  if (!schema || !components) {
    init();
    return <Loading fullScreen />;
  }

  return (
    <div className="lowcode-plugin-sample-preview">
      <ReactRenderer className="lowcode-plugin-sample-preview-content" schema={schema} components={components} />
    </div>
  );
};
