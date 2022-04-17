import { Form, FormInstance, Input } from 'antd';

interface IProps {
  form: FormInstance;
}
export default ({ form }: IProps) => {
  return (
    <Form layout="vertical" autoComplete="off" form={form}>
      <Form.Item
        name="pageName"
        rules={[
          {
            required: true,
            message: '页面名称不能为空',
          },
        ]}
        label="页面名称"
      >
        <Input placeholder="请输入页面名称" />
      </Form.Item>
    </Form>
  );
};
