import { StyledButton } from '@src/components/shared/Button.style';
import { Menu } from 'antd';
import { t } from 'i18next';
import Router from 'next/router';

const NoUserButtons = () => {
  return (
    <Menu
      style={{ width: '100%' }}
      mode="horizontal"
      items={[
        {
          label: (
            <StyledButton type="primary" onClick={() => Router.push('/')}>
              {t('Home')}
            </StyledButton>
          ),
          key: 'home',
        },
        {
          label: (
            <StyledButton type="primary" onClick={() => Router.push('/login')}>
              {t('login')}
            </StyledButton>
          ),
          key: 'login',
        },
      ]}
    />
  );
};

export default NoUserButtons;
