import { ILowCodePluginContext } from '@alilc/lowcode-engine';
import { Button } from 'antd';

// 注册保存面板
const HeaderPlugin = (ctx: ILowCodePluginContext) => {
  return {
    name: 'HeaderPlugin',
    async init() {
      const { skeleton, hotkey } = ctx;
      // 注册 logo 面板

      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'logo',
        content: <div>logo</div>,
        contentProps: {
          logo: 'https://img.alicdn.com/tfs/TB1_SocGkT2gK0jSZFkXXcIQFXa-66-66.png',
          href: '/',
        },
        props: {
          align: 'left',
          width: 100,
        },
      });
      skeleton.add({
        name: 'resetSchema',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: (
          <Button danger type="primary" ghost onClick={() => {}}>
            重置页面
          </Button>
        ),
      });
      skeleton.add({
        name: 'saveToLocal',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: <Button onClick={() => {}}>保存到本地</Button>,
      });
      skeleton.add({
        name: 'save',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: (
          <Button type="primary" ghost onClick={() => {}}>
            保存
          </Button>
        ),
      });
      skeleton.add({
        name: 'preview',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: (
          <Button type="primary" onClick={() => {}}>
            预览
          </Button>
        ),
      });
      hotkey.bind('command+s', (e) => {
        e.preventDefault();
        // saveSchema();
      });
    },
  };
};
HeaderPlugin.pluginName = 'HeaderPlugin';

export default HeaderPlugin;
