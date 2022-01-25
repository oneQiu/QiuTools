import { Drawer, DrawerProps, Menu, Button } from 'antd';
import './index.less';
import {
  ReactNode,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import CompLazy from './widget/CompLazy';
import { getUrlParams } from '@/util';
import OperationArea from './widget/OperationArea';

export interface TDRef {
  /** 当前选中 */
  currTabKey: string;
  /** 打开: 需要直接选中哪个tab */
  open: (tabKey?: string) => void;
  /** 关闭 */
  close: () => void;
}

export interface TabInfo {
  /* 标识 路由标识  */
  key: string;
  /** 图标 */
  icon?: ReactNode;
  /** 禁用 */
  disabled?: boolean | (() => boolean);
  /** 隐藏 */
  hide?: boolean | (() => boolean);
  /** menu显示的名称 */
  label?: ReactNode;
  /** 抽屉顶部 非必填 取label */
  title?: ReactNode;
  /** ！未完成 请勿使用 */
  children?: Exclude<TabInfo, 'children'>[];
  /** 渲染内容 */
  content?: ReactNode;
}

export interface IProps {
  /** tab */
  tabs: TabInfo[];
  /** 抽屉额外属性 */
  drawerProps?: Omit<DrawerProps, 'visible' | 'onClose'>;
  /** urlParamName */
  urlParamName?: string;
  /** 隐藏重新加载 */
  hideReload?: boolean;
  /** 触发更多的数量 */
  moreCount?: number;
  /** 操作按钮 */
  operations?: Operation[];
  /** 抽屉切换回调 */
  onTabChange?: (key: string) => void;
  /** 显隐回调 */
  onVisibleChange?: (visible: boolean) => void;
  /** 默认开启 */
  defaultOpen?: boolean;
}

export interface KeyHandleMap {
  [key: string]: () => void;
}

export interface Operation {
  key: string | number;
  onClick?: () => void;
  text: ReactNode;
}

/**
 * TabDrawer 标签抽屉：Tab懒加载 + 路由联动
 */
export default forwardRef<TDRef, IProps>(
  (
    {
      tabs,
      hideReload = false,
      operations = [],
      moreCount = 3,
      defaultOpen,
      onVisibleChange,
      drawerProps = {
        width: '60vw',
      },
      onTabChange,
      urlParamName = 'activeKey',
    },
    ref,
  ) => {
    const initOpen = getUrlParams()[urlParamName];
    const [visible, setVisible] = useState<boolean>(!!initOpen || defaultOpen);
    const [activeKey, setActiveKey] = useState<string>(initOpen ?? '');
    const keyHandles: KeyHandleMap = {};

    useEffect(() => {
      if (defaultOpen && !initOpen) {
        setActiveKey(tabs[0].key);
      }
    }, []);

    // 注入事件
    useImperativeHandle(ref, () => ({
      open: (tabKey) => {
        setVisible(true);
        let { key } = tabs[0];
        if (tabKey) {
          for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].key === tabKey) {
              key = tabKey;
              break;
            }
          }
        }
        setActiveKey(key);
      },
      close: () => setVisible(false),
      currTabKey: activeKey,
    }));

    useEffect(() => {
      onVisibleChange?.(visible);
    }, [visible]);

    // 监听selectedKey变化
    useEffect(() => {
      onTabChange?.(activeKey);
      const { href, origin } = location;
      let path = href.replace(origin, '');
      // 开启 ｜ 切换
      if (activeKey) {
        if (path.includes(`${urlParamName}=`)) {
          path = path.replace(
            RegExp(`${urlParamName}=\\w+`, 'g'),
            `${urlParamName}=${activeKey}`,
          );
        } else {
          path += `${
            path.includes('?') ? '&' : '?'
          }${urlParamName}=${activeKey}`;
        }
        history.replaceState('', '', path);
      } else {
        // 关闭
        const params = getUrlParams();
        let _path = path.split('?')[0];
        Object.keys(params).forEach((i) => {
          if (i !== urlParamName) {
            _path += `${_path.includes('?') ? '&' : '?'}${i}=${params[i]}`;
          }
        });
        history.replaceState('', '', _path);
      }
    }, [activeKey]);

    const _onClose = () => {
      setActiveKey('');
      setVisible(false);
    };

    const renderItem = ({
      children = [],
      key,
      label,
      disabled,
      hide,
      icon,
    }: TabInfo): ReactNode => {
      const hasChild = false;
      // const hasChild = children.length > 0;
      const props = {
        key,
        icon,
        disabled: typeof disabled === 'function' ? disabled() : disabled,
      };
      if (typeof hide === 'function' ? hide() : hide) return;
      if (hasChild) {
        return (
          <Menu.SubMenu {...props}>
            {children.map((i) => renderItem(i))}
          </Menu.SubMenu>
        );
      }
      return <Menu.Item {...props}>{label}</Menu.Item>;
    };

    const getTitle = (): ReactNode => {
      const item = tabs.find((i) => i.key === activeKey);
      return item?.title || item?.label;
    };

    return (
      <Drawer
        className="pro-drawer-wrap"
        visible={visible}
        title={getTitle()}
        {...drawerProps}
        extra={
          <OperationArea
            {...{ hideReload, moreCount, operations, activeKey, keyHandles }}
          />
        }
        closable={false}
        maskStyle={{
          backgroundColor: 'transparent',
        }}
        onClose={_onClose}
      >
        {visible && (
          <div className="tab-wrap" style={{ right: drawerProps.width }}>
            <Button
              className={'tab-close'}
              icon={<i className="iconfont spicon-shouqikuaijin" />}
              onClick={_onClose}
              block
              type={'text'}
            />
            <Menu
              style={{ border: 'none' }}
              key={activeKey}
              onClick={(e) => setActiveKey(e.key)}
              defaultSelectedKeys={[activeKey]}
            >
              {tabs.map(renderItem)}
            </Menu>
          </div>
        )}
        {tabs.map((i) => (
          <CompLazy
            key={i.key}
            visible={i.key === activeKey}
            initSetKey={(handle) => {
              keyHandles[i.key] = handle;
            }}
          >
            {i.content}
          </CompLazy>
        ))}
      </Drawer>
    );
  },
);
