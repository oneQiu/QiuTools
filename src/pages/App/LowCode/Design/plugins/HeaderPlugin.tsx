import { Logo } from '@/components/Icon';
import { ILowCodePluginContext } from '@alilc/lowcode-engine';
import { Button, message } from 'antd';
import { onPreview, resetSchema, saveSchemaToLocal } from './utils';

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
        content: <Logo logoSize="small" />,
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
          <Button danger type="primary" className="font-size-12" ghost onClick={resetSchema}>
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
        content: (
          <Button className="font-size-12" onClick={saveSchemaToLocal}>
            保存到本地
          </Button>
        ),
      });
      skeleton.add({
        name: 'save',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: (
          <Button
            className="font-size-12"
            type="primary"
            ghost
            onClick={() => {
              message.warn('暂无接口报错');
            }}
          >
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
          <Button className="font-size-12" type="primary" onClick={onPreview}>
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
