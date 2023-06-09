import Layout from '@src/components/layout/Layout';
import Login from '@src/components/Login';
import { NextPage } from 'next';

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default LoginPage;
