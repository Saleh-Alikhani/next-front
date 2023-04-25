import { useGetCurrentUserQuery } from '@src/app/login.generated';
import Button from '@src/components/shared/Button';
import i18n from '@src/utils/i18n';
import { Menu } from 'antd';
import { t } from 'i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const UserButtons: React.FC = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('id_token');
    router.push('/api/auth/logout');
  };
  const { data, isLoading, isError, error } = useGetCurrentUserQuery();

  useEffect(() => {
    if (!data && isError) {
      if (error.message?.slice(0, 12) === 'Unauthorized') {
        localStorage.removeItem('id_token');
        router.push('/login?err=401');
      }
    } //eslint-disable-next-line
  }, [isLoading]);

  return isLoading || !data ? (
    <></>
  ) : (
    <>
      <Menu
        mode="horizontal"
        activeKey={router.pathname}
        style={{ width: '100%' }}
        items={[
          {
            key: '/dashboard',
            label: (
              <Button type="link" onClick={() => router.push('/dashboard')}>
                {t('Dashboard')}
              </Button>
            ),
          },
          {
            key: '/',
            label: (
              <Button
                type="link"
                $margin="0 10px 0 0"
                onClick={() => router.push('/')}
                disabled={router.pathname === '/'}
              >
                {t('Home')}
              </Button>
            ),
          },
          {
            key: '/logout',
            label: (
              <Button
                type="link"
                onClick={handleLogout}
                $margin={i18n.language === 'fa' ? '0 auto 0 0' : '0 0 0 auto'}
              >
                {t('Logout')}
              </Button>
            ),
          },
        ]}
      />
    </>
  );
};

export default UserButtons;
