import styles from '../index.module.less';
import { Timeline, Card } from 'antd';
import { useEffect, useState } from 'react';

export default () => {
  const [timeLine, setTimeLine] = useState<any[]>([]);

  useEffect(() => {
    setTimeLine([
      { id: 1, content: 'Create a services site 2015-09-01' },
      { id: 2, content: 'Technical testing 2015-09-01' },
      { id: 3, content: 'Network problems being solved 2015-09-01' }
    ]);
  }, []);

  return (
    <Card className={styles['info-card']}>
      <Timeline mode='alternate' items={timeLine.map(i => ({ children: i.content }))} />
    </Card>
  );
};
