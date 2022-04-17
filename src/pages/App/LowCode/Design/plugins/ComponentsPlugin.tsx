import { ILowCodePluginContext, project } from '@alilc/lowcode-engine';
import ComponentsPane from '@alilc/lowcode-plugin-components-pane';

// 组件面板
const ComponentsPlugin = (ctx: ILowCodePluginContext) => {
  return {
    name: 'ComponentsPlugin',
    async init() {
      const { skeleton } = ctx;
      // 注册组件面板
      const componentsPane = skeleton.add({
        area: 'leftArea',
        type: 'PanelDock',
        name: 'componentsPane',
        content: ComponentsPane,
        contentProps: {},
        props: {
          align: 'top',
          icon: 'zujianku',
          description: '组件库',
        },
      });
      componentsPane?.disable?.();
      project.onSimulatorRendererReady(() => {
        componentsPane?.enable?.();
      });
    },
  };
};
ComponentsPlugin.pluginName = 'ComponentsPlugin';

export default ComponentsPlugin;
