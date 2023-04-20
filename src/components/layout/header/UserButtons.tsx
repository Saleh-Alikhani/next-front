import { useGetCurrentUserQuery } from '@src/app/login.generated';
import Button from '@src/components/shared/Button';
import i18n from '@src/utils/i18n';
import { t } from 'i18next';
import { useRouter } from 'next/router';

const UserButtons: React.FC = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('id_token');
    router.push('/api/auth/logout');
  };
  const { data, isLoading, isError } = useGetCurrentUserQuery();
  if (!data && isError) {
    router.push('/login');
    return null;
  }
  return isLoading || !data ? (
    <></>
  ) : (
    <>
      {data.currentUser.name}
      <Button
        type="link"
        onClick={() => router.push('/dashboard')}
        disabled={router.pathname === '/dashboard'}
      >
        {t('Dashboard')}
      </Button>
      <Button
        type="link"
        $margin="0 10px 0 0"
        onClick={() => router.push('/')}
        disabled={router.pathname === '/'}
      >
        {t('Home')}
      </Button>
      <Button
        type="link"
        onClick={handleLogout}
        $margin={i18n.language === 'fa' ? '0 auto 0 0' : '0 0 0 auto'}
      >
        {t('Logout')}
      </Button>
    </>
  );
};

export default UserButtons;
