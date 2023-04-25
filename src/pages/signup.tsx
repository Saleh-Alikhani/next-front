import Layout from '@src/components/layout/Layout';
import SignUp from '@src/components/SignUp';
import { NextPage } from 'next';

const SignUpPage: NextPage = () => {
  return (
    <Layout>
      <SignUp />
    </Layout>
  );
};

export default SignUpPage;
