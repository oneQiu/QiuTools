import useHistory from '@/hooks/useHistory';
import ProTable, { ProColumns, TableDropdown } from '@ant-design/pro-table';
import { Button, Card, Form, Modal } from 'antd';
import CreatePage from './widgets/CreatePage';

interface GithubIssueItem {
  id: number;
  url: string;
  pageName: string;
  description: string;
  createTime: string;
  creator: string;
  updateTime: string;
  updater: string;
  state: number;
}

const columns: Array<ProColumns<GithubIssueItem>> = [
  {
    title: 'ID',
    dataIndex: 'id',
    copyable: true,
    align: 'center',
    search: false,
  },
  {
    title: '页面名称',
    dataIndex: 'pageName',
    align: 'center',
    copyable: true,
  },
  {
    title: '状态',
    dataIndex: 'state',
    align: 'center',
    valueType: 'select',
    valueEnum: {
      0: { text: '全部', status: 'Default' },
      1: {
        text: '已发布',
        status: 'Error',
      },
      2: {
        text: '未发布',
        status: 'Success',
      },
    },
  },
  {
    title: '最近修改',
    dataIndex: 'updater',
    align: 'center',
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    valueType: 'dateRange',
    align: 'center',
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: '操作',
    valueType: 'option',
    align: 'center',
    key: 'option',
    render: (__, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

export default () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const onCreatePage = () => {
    Modal.confirm({
      content: <CreatePage form={form} />,
      onOk: async () => {
        const res = await form.validateFields();
        console.log(res);
        history.push('/app/lowcode/design/123');
      },
      width: 500,
      title: '创建页面',
    });
  };

  return (
    <Card>
      <ProTable
        headerTitle="页面列表"
        columns={columns}
        toolBarRender={() => [
          <Button type="primary" onClick={onCreatePage}>
            新建页面
          </Button>,
        ]}
      />
    </Card>
  );
};
