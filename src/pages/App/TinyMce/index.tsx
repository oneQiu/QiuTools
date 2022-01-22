import { Fragment, useState } from 'react';
import RichEditor from '@/components/RichEditor';
import { Button, Space } from 'antd';
import TabDrawer from '@/components/TabDrawer';

export default () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Fragment>
      <h2>
        <Space>
          TinyMce-编辑器
          <Button type="primary" onClick={() => setVisible(true)}>
            展开
          </Button>
        </Space>
      </h2>
      <TabDrawer
        tabs={[
          { key: '1', label: '测试菜单1', content: '我谢谢你呢' },
          { key: '2', label: '测试菜单2', content: '没事' },
          { key: '3', label: '测试菜单3', content: <h2>1</h2> }
        ]}
        visible={visible}
        onVisible={setVisible}
      />
      <RichEditor />
    </Fragment>
  );
};
