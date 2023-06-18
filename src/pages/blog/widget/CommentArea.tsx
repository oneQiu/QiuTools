import { Avatar, Form, Button, Input } from 'antd';
import { Fragment } from 'react';

const { TextArea } = Input;
export default () => {
  const Editor = ({ onChange, onSubmit, submitting, value }: any) => {
    return (
      <Fragment>
        <Form.Item>
          <TextArea
            autoSize={{ minRows: 4, maxRows: 6 }}
            onChange={onChange}
            value={value}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType='submit'
            loading={submitting}
            onClick={onSubmit}
            type='primary'
          >
            发表
          </Button>
        </Form.Item>
      </Fragment>
    );
  };

  return (
    <div className='comment-area'>
      <h2 style={{ fontWeight: 'bold' }}>评论</h2>
      <div>123</div>
    </div>
  );
};
