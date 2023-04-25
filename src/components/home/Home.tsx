import { Col, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <Col dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}>
      <Row justify="center" style={{ padding: '24px 0 0 0' }}>
        <Col span={20}>
          <Typography.Title>{t('Home')}</Typography.Title>
          <Typography.Paragraph>{t('lorem')}</Typography.Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={10}>
          <img src="https://picsum.photos/500/300" alt="a" />
        </Col>
        <img src="https://picsum.photos/500/300" alt="b" />
        <Col span={10}></Col>
      </Row>
      <Row justify="center">
        <Col span={20}>
          <Typography.Title>{t('Title')}1</Typography.Title>
          <Typography.Paragraph>{t('lorem')}</Typography.Paragraph>
        </Col>
      </Row>
    </Col>
  );
};

export default Home;
