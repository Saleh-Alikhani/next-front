import { useSignUpMutation } from '@src/app/signup.generated';
import { Col, Form, Input, notification, Row, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import Button from './shared/Button';
import { StyledForm } from './SignUp.style';

const SignUp: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [signUp, signUpRes] = useSignUpMutation();
  const router = useRouter();

  return (
    <Row justify="center" dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}>
      <Col>
        <Typography.Title>{t('signUp')}</Typography.Title>
        <StyledForm
          layout="vertical"
          onFinish={(fields: any) => {
            signUp({
              input: {
                username: fields.username,
                password: fields.password,
                name: fields.name,
              },
            }).then((res: any) => {
              if (res.data) {
                router.push('/login');
                return Promise.resolve();
              }
              if (res.error) {
                if (res.error.message.slice(0, 8) === 'Conflict') {
                  notification.error({
                    message: t('username_error'),
                    placement: 'bottomLeft',
                  });
                }
              }
            });
          }}
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please Enter Username' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please Enter Name' }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please Enter Password!' }]}
          >
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your Password!' },
              ({ getFieldValue }) => {
                return {
                  validator: (_, value) => {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject();
                  },
                  message: 'Passwords Must Match',
                };
              },
            ]}
          >
            <Input placeholder="Enter Password Again" type="password" />
          </Form.Item>
          <Form.Item>
            <Button
              $margin="10px 4px"
              type="primary"
              htmlType="submit"
              loading={signUpRes.isLoading}
            >
              {t('signUp')}
            </Button>
          </Form.Item>
        </StyledForm>
      </Col>
    </Row>
  );
};

export default SignUp;
