import { useAuthMutation } from '@src/app/login.generated';
import Layout from '@src/components/layout/Layout';
import { Button, Form, Input } from 'antd';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LoginPage: NextPage = () => {
  const [auth, authRes] = useAuthMutation();
  const router = useRouter();
  const handleLogin = (fields: any) => {
    auth({
      loginUserInput: {
        username: fields.username as string,
        password: fields.password as string,
      },
    });
  };

  useEffect(() => {
    if (authRes.data) {
      localStorage.setItem('id_token', authRes.data.login.id_token);
      router.push('/');
    } //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authRes.data]);

  return (
    <Layout>
      <Form layout="vertical" onFinish={(fields) => handleLogin(fields)}>
        <Form.Item label="username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="pass" name="password">
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={authRes.isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default LoginPage;
