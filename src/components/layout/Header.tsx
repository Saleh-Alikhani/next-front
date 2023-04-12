import { UserProfile } from '@auth0/nextjs-auth0/client';
import { Col, Dropdown, Menu, Row } from 'antd';
import { t } from 'i18next';
import Router from 'next/router';

import { LANGUAGES } from '@/constants/common';
import i18n from '@/utils/i18n';

import { StyledButton, StyledHeader, StyledIcon } from './index.style';

type Props = {
  user?: UserProfile;
  language: string;
  setLanguage: (lang: string) => void;
};

const Header: React.FC<Props> = (props) => {
  const handleLang = (info: any) => {
    i18n.changeLanguage(info.key);
    localStorage.setItem('lang', info.key);
    props.setLanguage(info.key);
  };

  return (
    <StyledHeader>
      <Row dir={props.language === 'fa' ? 'rtl' : 'ltr'}>
        <Dropdown
          dropdownRender={() => (
            <Menu
              title="Choose Language"
              onClick={handleLang}
              items={LANGUAGES?.map((lng) => ({
                ...lng,
                disabled: lng?.key === props.language,
              }))}
              mode="vertical"
            />
          )}
        >
          <StyledIcon height={22} />
        </Dropdown>

        <Col span={3}>
          {t('welcome')}
          {props.user?.nickname?.charAt(0).toUpperCase()}
          {props.user?.nickname?.slice(1)}
        </Col>
        <Col>
          {!props.user ? (
            <StyledButton
              type="primary"
              onClick={() => Router.push('/api/auth/login')}
            >
              {t('login')}
            </StyledButton>
          ) : (
            <>
              <StyledButton type="link">{t('Dashboard')}</StyledButton>
              <StyledButton
                type="link"
                onClick={() => Router.push('/api/auth/logout')}
              >
                {t('Logout')}
              </StyledButton>
            </>
          )}
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default Header;
