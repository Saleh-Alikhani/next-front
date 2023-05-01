import { Menu, SiderProps } from 'antd';
import { useTranslation } from 'react-i18next';

import { StyledSider } from '../Dashboard.style';

type Props = SiderProps & {
  setActiveTab: (key: string) => void;
  activeTab: string;
};

const Sider: React.FC<Props> = ({ activeTab, setActiveTab, ...rest }) => {
  //eslint-disable-next-line
  const { theme, ...props } = rest;
  const { t } = useTranslation();
  return (
    <StyledSider {...props}>
      <Menu
        defaultSelectedKeys={['create']}
        selectedKeys={[activeTab]}
        items={[
          {
            label: t('Cats'),
            type: 'group',
            children: [
              {
                label: t('Create'),
                key: 'create',
                onClick: (info) => setActiveTab(info.key),
              },
              {
                label: t('My_Cats'),
                key: 'myCats',
                onClick: (info) => setActiveTab(info.key),
              },
              {
                label: t('Fight'),
                key: 'fight',
                onClick: (info) => setActiveTab(info.key),
              },
            ],
          },
        ]}
      />
    </StyledSider>
  );
};

export default Sider;
