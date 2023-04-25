import { StyledButton } from '@src/components/shared/Button.style';
import { Menu } from 'antd';
import { t } from 'i18next';
import Router, { useRouter } from 'next/router';

const NoUserButtons = () => {
  const router = useRouter();
  return (
    <Menu
      activeKey={router.pathname}
      style={{ width: '100%' }}
      mode="horizontal"
      items={[
        {
          label: (
            <StyledButton type="link" onClick={() => Router.push('/')}>
              {t('Home')}
            </StyledButton>
          ),
          key: '/',
        },
        {
          label: (
            <StyledButton type="link" onClick={() => Router.push('/login')}>
              {t('login')}
            </StyledButton>
          ),
          key: '/login',
        },
        {
          label: (
            <StyledButton type="link" onClick={() => Router.push('/signup')}>
              {t('signUp')}
            </StyledButton>
          ),
          key: '/signup',
        },
      ]}
    />
  );
};

export default NoUserButtons;
