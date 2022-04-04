import { Collapse } from 'antd';
import { CaretRightOutlined, PlusOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

interface IProps {
  onFieldClick: (i: RichEditor.Field) => void;
  fieldList?: RichEditor.Field[];
  templateList?: RichEditor.Field[];
}
export default ({
  onFieldClick,
  fieldList = [],
  templateList = []
}: IProps) => {
  return (
    <div className="auxiliary-zone">
      <Collapse
        defaultActiveKey={['template', 'field']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        ghost>
        {templateList.length !== 0 && (
          <Panel
            header="模板库"
            key="template"
            showArrow={false}
            collapsible="disabled">
            {templateList.map((i, idx) => (
              <div
                key={idx}
                className="item-warp"
                onClick={() => onFieldClick(i)}>
                <span className="label">{i.name}</span>
                <PlusOutlined />
              </div>
            ))}
          </Panel>
        )}
        <Panel
          header="字段库"
          key="field"
          showArrow={false}
          collapsible="disabled">
          {fieldList.map(item => (
            <div
              key={item.key}
              className="item-warp"
              onClick={() => onFieldClick(item)}>
              <span className="label">{item.name}</span>
              <PlusOutlined />
            </div>
          ))}
        </Panel>
      </Collapse>
    </div>
  );
};
