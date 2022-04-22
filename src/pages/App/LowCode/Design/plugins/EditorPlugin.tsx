import { ILowCodePluginContext } from '@alilc/lowcode-engine';
import { injectAssets } from '@alilc/lowcode-plugin-inject';
import assets from './assets.json';
import { getPageSchema } from './utils';

// 大纲 物料初始化
const EditorPlugin = (ctx: ILowCodePluginContext) => {
  return {
    name: 'EditorPlugin',
    async init() {
      // 设置物料描述
      const { material, project } = ctx;
      material.setAssets(await injectAssets(assets));
      const schema = await getPageSchema();
      console.log(schema);

      // 加载 schema
      project.openDocument(schema || '');
    },
  };
};
EditorPlugin.pluginName = 'EditorPlugin';

export default EditorPlugin;
