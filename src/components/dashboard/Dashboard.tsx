import { Layout } from 'antd';
import { useAnimate } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledLayout, StyledTrigger } from './Dashboard.style';
import Sider from './sider/Sider';
import Tabs from './tabs/Tabs';

const Dashboard: React.FC = () => {
  const [trigger, animate] = useAnimate();
  const [isSiderOpen, setIsSiderOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('myCats');
  const { t } = useTranslation();

  const toggleMenu = () => {
    if (isSiderOpen) {
      setIsSiderOpen(!isSiderOpen);
      animate(trigger.current, { x: [-250, 0] });
    } else {
      setIsSiderOpen(!isSiderOpen);
      animate(trigger.current, { x: [0, -250] });
    }
  };

  return (
    <StyledLayout>
      <Layout.Content>
        <Tabs
          activeTab={activeTab}
          setActiveTab={(flag) => setActiveTab(flag)}
        />
      </Layout.Content>
      <StyledTrigger
        onClick={toggleMenu}
        ref={trigger}
        justify="center"
        align="middle"
      >
        {t('Menu')}
      </StyledTrigger>
      <Sider
        setActiveTab={(key) => setActiveTab(key)}
        width={250}
        collapsed={!isSiderOpen}
        activeTab={activeTab}
        collapsedWidth={0}
      />
    </StyledLayout>
  );
};

export default Dashboard;
