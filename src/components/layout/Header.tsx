import { LANGUAGES } from '@src/constants/common';
import i18n from '@src/utils/i18n';
import { Col, Dropdown, Menu, Row } from 'antd';
import { t } from 'i18next';

import NoUserButtons from './header/NoUserButtons';
import UserButtons from './header/UserButtons';
import { StyledButtons, StyledHeader, StyledIcon } from './index.style';

type Props = {
  language: string;
  setLanguage: (lang: string) => void;
  isUser?: boolean;
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
        <Col span={5}>{t('welcome')}</Col>
        <StyledButtons span={19}>
          {props.isUser ? <UserButtons /> : <NoUserButtons />}
        </StyledButtons>
      </Row>
    </StyledHeader>
  );
};

export default Header;
