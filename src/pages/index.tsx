import { useUser } from '@auth0/nextjs-auth0/client';
import Router from 'next/router';

export default function Home() {
  const { isLoading, user, error } = useUser();

  return isLoading || error ? (
    <>{error?.message}</>
  ) : (
    <>
      123<button onClick={() => Router.push('/api/auth/login')}>login</button>
      123<button onClick={() => Router.push('/logged')}>logged</button>
      {user && <>welcome {user.name}</>}
    </>
  );
}
