/**
 * 右上角操作区
 */
import { useState } from 'react';
import { Button, Dropdown, Menu } from 'antd';
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
  moreCount,
}: IProps) => {
  const [fakerLoading, setFakerLoading] = useState<boolean>(false);

  return (
    <div className={'operation-area'}>
      {!hideReload && (
        <Button
          className={'color-6e'}
          icon={
            <i
              style={{ position: 'relative', top: -2, display: 'block' }}
              className={`iconfont spicon-shuaxin ${
                fakerLoading ? 'iconfont-spin' : ''
              }`}
            />
          }
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
      {operations.slice(0, moreCount).map((i) => (
        <Button
          className={'color-6e'}
          onClick={i.onClick}
          key={i.key}
          type={'text'}
        >
          {i.text}
        </Button>
      ))}
      {operations.length > moreCount && (
        <Dropdown
          overlayClassName={'drop-down'}
          trigger={['click']}
          overlay={
            <Menu>
              {operations.slice(moreCount).map((i) => (
                <Menu.Item
                  key={i.key}
                  onClick={i.onClick}
                  className={'drop-down-menu-item'}
                >
                  {i.text}
                </Menu.Item>
              ))}
            </Menu>
          }
        >
          <Button
            icon={<i className="iconfont spicon-gengduo" />}
            className={'color-6e'}
            type={'text'}
          />
        </Dropdown>
      )}
    </div>
  );
};
