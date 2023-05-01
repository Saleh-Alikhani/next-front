import { useAuthMutation } from '@src/app/login.generated';
import { Col, Form, Input, notification, Row, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Button from './shared/Button';
import { StyledForm } from './SignUp.style';

const Login: React.FC = () => {
  const { t, i18n } = useTranslation();

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
    if (router.query.err === '401') {
      notification.destroy();
      notification.error({
        message: 'Login to use protected pages.',
        placement: 'bottomLeft',
      });
    }
    if (authRes.isError && authRes.error.message?.slice(0, 12)) {
      notification.error({
        message: 'Entered credentials are wrong',
        placement: 'bottomLeft',
      });
    }
    if (authRes.data) {
      localStorage.setItem('id_token', authRes.data.login.id_token);
      router.push('/');
    } //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authRes.data, authRes.isError]);
  return (
    <>
      <Row justify="center" dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}>
        <Col>
          <Typography.Title>{t('login')}</Typography.Title>
          <StyledForm
            layout="vertical"
            onFinish={(fields) => handleLogin(fields)}
          >
            <Form.Item label="Username" name="username">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
            <Form.Item>
              <Button
                $margin="10px 4px"
                type="primary"
                htmlType="submit"
                loading={authRes.isLoading}
              >
                {t('login')}
              </Button>
            </Form.Item>
          </StyledForm>
        </Col>
      </Row>
    </>
  );
};

export default Login;
