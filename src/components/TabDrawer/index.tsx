import { Drawer, DrawerProps, Menu } from 'antd';
import './index.less';
import { ReactNode, useEffect, useState } from 'react';
import CompLazy from '@/components/TabDrawer/widget/CompLazy';
import { getUrlParams } from '@/utils/basic';

interface TabInfo {
  /* 标识 路由标识  */
  key: string;
  icon?: ReactNode;
  disabled?: boolean | (() => boolean);
  hide?: boolean | (() => boolean);
  label?: ReactNode;
  title?: ReactNode;
  /** ！未完成 请勿使用 */
  children?: Exclude<TabInfo, 'children'>[];
  content?: ReactNode;
}
interface IProps {
  defaultSelected?: string;
  visible: boolean;
  onVisible: (visible: boolean) => void;
  tabs: TabInfo[];
  drawerProps?: Exclude<DrawerProps, 'visible' | 'onClose'>;
}

/**
 * TabDrawer 标签抽屉：Tab懒加载 + 路由联动
 */
export default ({
  visible,
  onVisible,
  tabs,
  defaultSelected,
  drawerProps = {
    width: 600
  }
}: IProps) => {
  const [selectedKey, setSelectedKey] = useState<string>('');
  // 首次根据路由信息加载
  useEffect(() => {
    const { open } = getUrlParams();
    if (open) {
      onVisible(true);
      setSelectedKey(open);
    }
  }, []);

  useEffect(() => {
    visible && init();
  }, [defaultSelected, visible]);

  // 监听selectedKey变化
  useEffect(() => {
    if (selectedKey) {
      let search = location.search;
      if (search.includes('open=')) {
        search = search.replace(/open=\w+/g, `open=${selectedKey}`);
      } else if (search) {
        search += `&open=${selectedKey}`;
      } else {
        search = `?open=${selectedKey}`;
      }
      history.replaceState('', '', search);
    } else {
      history.replaceState(
        '',
        '',
        location.search.replace(/(\?open|&open)=\w+/, '') || location.pathname
      );
    }
  }, [selectedKey]);

  const init = () => {
    setSelectedKey(defaultSelected || tabs[0].key);
  };

  const _onClose = () => {
    setSelectedKey('');
    onVisible(false);
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
    const item = tabs.find(i => i.key === selectedKey);
    return item?.title || item?.label;
  };

  return (
    <Drawer
      className="pro-drawer-wrap"
      visible={visible}
      title={getTitle()}
      {...drawerProps}
      onClose={_onClose}>
      {visible && (
        <div className="tab-wrap" style={{ right: drawerProps.width }}>
          <Menu
            style={{ border: 'none' }}
            key={selectedKey}
            onClick={e => setSelectedKey(e.key)}
            defaultSelectedKeys={[selectedKey]}>
            {tabs.map(renderItem)}
          </Menu>
        </div>
      )}
      {tabs.map(i => (
        <CompLazy key={i.key} visible={i.key === selectedKey}>
          {i.content}
        </CompLazy>
      ))}
    </Drawer>
  );
};
