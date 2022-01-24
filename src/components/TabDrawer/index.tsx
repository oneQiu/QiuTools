import { Drawer, DrawerProps, Menu, Button } from 'antd';
import './index.less';
import {
  ReactNode,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle
} from 'react';
import CompLazy from '@/components/TabDrawer/widget/CompLazy';
import { getUrlParams } from '@/utils/basic';
import { DoubleRightOutlined } from '@ant-design/icons';
import OperationArea from '@/components/TabDrawer/widget/OperationArea';

export interface TDRef {
  /** 当前选中 */
  currTabKey: string;
  /** 打开: 需要直接选中哪个tab */
  open: (tabKey?: string) => void;
  /** 关闭 */
  close: () => void;
}

interface TabInfo {
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

interface IProps {
  /** tab */
  tabs: TabInfo[];
  /** 抽屉额外属性 */
  drawerProps?: Exclude<DrawerProps, 'visible' | 'onClose'>;
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
}

export type KeyHandleMap = {
  [key: string]: () => void;
};

// TODO 改成自己使用的Button
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
      drawerProps = {
        width: '60vw'
      },
      onTabChange,
      urlParamName = 'open'
    },
    ref
  ) => {
    const initOpen = getUrlParams()[urlParamName];
    const [visible, setVisible] = useState<boolean>(!!initOpen);
    const [activeKey, setActiveKey] = useState<string>(initOpen ?? '');
    const keyHandles: KeyHandleMap = {};

    // 注入事件
    useImperativeHandle(ref, () => ({
      open: tabKey => {
        setVisible(true);
        let key = tabs[0].key;
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
      currTabKey: activeKey
    }));

    // 监听selectedKey变化
    useEffect(() => {
      console.log('again');
      onTabChange?.(activeKey);
      if (activeKey) {
        let search = location.search;
        if (search.includes(`${urlParamName}=`)) {
          search = search.replace(
            RegExp(`${urlParamName}=\\w+`, 'g'),
            `${urlParamName}=${activeKey}`
          );
        } else if (search) {
          search += `&${urlParamName}=${activeKey}`;
        } else {
          search = `?${urlParamName}=${activeKey}`;
        }
        history.replaceState('', '', search);
      } else {
        history.replaceState(
          '',
          '',
          location.search.replace(
            RegExp(`(\\?${urlParamName}|&${urlParamName})=\\w+`, 'g'),
            ''
          ) || location.pathname
        );
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
      icon
    }: TabInfo): ReactNode => {
      const hasChild = false;
      // const hasChild = children.length > 0;
      const props = {
        key,
        icon,
        disabled: typeof disabled === 'function' ? disabled() : disabled
      };
      if (typeof hide === 'function' ? hide() : hide) return;
      if (hasChild) {
        return (
          <Menu.SubMenu {...props}>
            {children.map(i => renderItem(i))}
          </Menu.SubMenu>
        );
      }
      return <Menu.Item {...props}>{label}</Menu.Item>;
    };

    const getTitle = (): ReactNode => {
      const item = tabs.find(i => i.key === activeKey);
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
          backgroundColor: 'transparent'
        }}
        onClose={_onClose}>
        {visible && (
          <div className="tab-wrap" style={{ right: drawerProps.width }}>
            <Button
              className={'tab-close'}
              icon={<DoubleRightOutlined style={{ fontSize: 12 }} />}
              onClick={_onClose}
              block
              type={'text'}
            />
            <Menu
              style={{ border: 'none' }}
              key={activeKey}
              onClick={e => setActiveKey(e.key)}
              defaultSelectedKeys={[activeKey]}>
              {tabs.map(renderItem)}
            </Menu>
          </div>
        )}
        {tabs.map(i => (
          <CompLazy
            key={i.key}
            visible={i.key === activeKey}
            initSetKey={handle => (keyHandles[i.key] = handle)}>
            {i.content}
          </CompLazy>
        ))}
      </Drawer>
    );
  }
);
