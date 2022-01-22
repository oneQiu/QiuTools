/**
 * 组件懒加载
 */
import { ReactNode, useEffect, useState } from 'react';

interface IProps {
  children?: ReactNode;
  visible?: boolean;
}
export default ({ children, visible }: IProps) => {
  const [showChild, setShowChild] = useState<boolean>(false);

  useEffect(() => {
    if (visible && !showChild) setShowChild(true);
  });

  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      {showChild ? children : null}
    </div>
  );
};
