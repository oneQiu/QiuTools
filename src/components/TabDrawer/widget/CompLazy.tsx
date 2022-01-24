/**
 * 组件懒加载
 */
import { ReactNode, useEffect, useState } from 'react';

interface IProps {
  children?: ReactNode;
  visible?: boolean;
  initSetKey?: (handle: () => void) => void;
}
export default ({ children, visible, initSetKey }: IProps) => {
  const [key, setKey] = useState<number>(Math.random());
  const [showChild, setShowChild] = useState<boolean>(false);

  useEffect(() => {
    initSetKey?.(() => setKey(Math.random()));
    if (visible && !showChild) setShowChild(true);
  });

  return (
    <div style={{ display: visible ? 'block' : 'none' }} key={key}>
      {showChild ? children : null}
    </div>
  );
};
