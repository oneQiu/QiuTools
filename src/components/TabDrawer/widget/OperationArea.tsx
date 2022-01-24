/**
 * 右上角操作区
 */
import { Fragment, useState } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { MoreOutlined, SyncOutlined } from '@ant-design/icons';
import { KeyHandleMap, Operation } from '../index';
import '../index.less';

interface IProps {
  keyHandles: KeyHandleMap;
  activeKey: string;
  hideReload: boolean;
  operations: Operation[];
  moreCount: number;
}

export default ({
  keyHandles,
  activeKey,
  hideReload,
  operations,
  moreCount
}: IProps) => {
  const [fakerLoading, setFakerLoading] = useState<boolean>(false);

  return (
    <div className={'operation-area'}>
      {!hideReload && (
        <Button
          className={'color-6e'}
          icon={<SyncOutlined spin={fakerLoading} />}
          onClick={() => {
            const reload = keyHandles[activeKey];
            if (reload) {
              reload();
              setFakerLoading(true);
              setTimeout(() => {
                setFakerLoading(false);
              }, 1000);
            }
          }}
          type={'text'}
        />
      )}
      {operations.slice(0, moreCount).map(i => (
        <Button
          className={'color-6e'}
          onClick={i.onClick}
          key={i.key}
          type={'text'}>
          {i.text}
        </Button>
      ))}
      {operations.length > moreCount && (
        <Dropdown
          overlayClassName={'drop-down'}
          trigger={['click']}
          overlay={
            <Menu>
              {operations.slice(moreCount).map(i => (
                <Menu.Item
                  key={i.key}
                  onClick={i.onClick}
                  className={'drop-down-menu-item'}>
                  {i.text}
                </Menu.Item>
              ))}
            </Menu>
          }>
          <Button
            icon={<MoreOutlined />}
            className={'color-6e'}
            type={'text'}
          />
        </Dropdown>
      )}
    </div>
  );
};
