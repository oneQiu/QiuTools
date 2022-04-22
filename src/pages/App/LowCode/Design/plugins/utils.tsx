/* eslint-disable @iceworks/best-practices/recommend-polyfill */
import { material, project } from '@alilc/lowcode-engine';
import { message, Modal } from 'antd';
import { TransformStage } from '@alilc/lowcode-types';
import { filterPackages } from '@alilc/lowcode-plugin-inject';

export const onPreview = () => {
  const { pageId } = window as any;
  saveSchemaToLocal();
  window.open(`${location.origin}/app/lowcode/preview/${pageId}`);
};

export const saveSchemaToLocal = async () => {
  const { pageId } = window as any;
  // 写入Schema和Package依赖
  localStorage.setItem(getLSName(pageId), JSON.stringify(project.exportSchema(TransformStage.Save)));
  const packages = await filterPackages(material.getAssets().packages);
  localStorage.setItem(getLSName(pageId, 'packages'), JSON.stringify(packages));
  message.success('成功保存到本地');
};

export const resetSchema = async () => {
  const { pageId } = window as any;
  await new Promise<boolean>((resolve, reject) => {
    Modal.confirm({
      content: '确定要重置吗？您所有的修改都将消失！',
      onOk: () => {
        resolve(true);
      },
      onCancel: () => {
        reject();
      },
    });
  });
  let schema;
  try {
    schema = (await fetch('/template.json')).json();
  } catch (err) {
    schema = {
      componentName: 'Page',
      fileName: 'sample',
    };
  }

  localStorage.setItem(
    getLSName(pageId),
    JSON.stringify({
      componentsTree: [schema],
      componentsMap: material.componentsMap,
      version: '1.0.0',
      i18n: {},
    }),
  );

  project.getCurrentDocument()?.importSchema(schema);
  project.simulatorHost?.rerender();
  message.success('成功重置页面');
};

export const getPageSchema = async () => {
  const { pageId } = window as any;
  const schema = JSON.parse(localStorage.getItem(getLSName(pageId)) || '{}');
  const pageSchema = schema?.componentsTree?.[0];
  if (pageSchema) {
    return pageSchema;
  }
  return (await fetch('/template.json')).json();
};

/** 获取LocalStrong键名 */
export const getLSName = (pageId: string, ns = 'projectSchema') => `${ns}-${pageId}`;
