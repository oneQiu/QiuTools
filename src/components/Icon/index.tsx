import { createFromIconfontCN } from '@ant-design/icons';
import { type IconFontProps } from '@ant-design/icons/lib/components/IconFont';
import { Space } from 'antd';
import { type FC } from 'react';

const Icon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3006105_fbnyc96g2gf.js'
});

export default (props: IconFontProps) => {
  return <Icon {...props} />;
};

interface LogoProps {
  showText?: boolean;
  logoSize?: 'small' | 'normal' | 'large' | number;
  notHref?: boolean;
}

export const Logo: FC<LogoProps> = ({ showText = true, logoSize = 'normal', notHref }) => {
  const _size = {
    small: 24,
    normal: 36,
    large: 48
  };

  const toHome = () => {
    if (notHref) return;
    try {
      // history.push('/');
    } catch (error) {
      location.href = location.origin;
    }
  };

  return (
    <Space align='center' onClick={toHome} style={{ cursor: 'pointer' }}>
      <Icon type='icon-codepipelineCodePipeline'
            style={{ fontSize: typeof logoSize === 'number' ? logoSize : _size[logoSize] }} />
      {showText && <span style={{ fontWeight: 'bold', userSelect: 'none' }}>oneQiu</span>}
    </Space>
  );
};
