import { init } from '@alilc/lowcode-engine';
import { useEffect } from 'react';
import registerPlugins from './plugins';
import { useParams } from 'ice';
import './index.less';

const preference = new Map();
preference.set('DataSourcePane', {
  importPlugins: [],
  dataSourceTypes: [
    {
      type: 'fetch',
    },
    {
      type: 'jsonp',
    },
  ],
});

export default () => {
  const { pageId }: any = useParams();

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    (window as any).pageId = pageId;
    await registerPlugins();
    init(
      document.getElementById('low-code')!,
      {
        enableCondition: true,
        enableCanvasLock: true,
        supportVariableGlobally: true,
        simulatorUrl: [
          'https://alifd.alicdn.com/npm/@alilc/lowcode-react-simulator-renderer@latest/dist/css/react-simulator-renderer.css',
          'https://alifd.alicdn.com/npm/@alilc/lowcode-react-simulator-renderer@latest/dist/js/react-simulator-renderer.js',
        ],
      },
      preference,
    );
  };
  return <div id="low-code" style={{ height: '100%' }} />;
};
