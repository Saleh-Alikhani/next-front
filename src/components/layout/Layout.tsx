import Loading from '@components/loading/Loading';
import i18n from '@src/utils/i18n';
import { Layout as AntLayout } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MasterLayout from './MasterLayout';

type Props = {
  children: React.ReactNode;
};

const StyledWrapper = styled(AntLayout)`
  height: 100%;
`;

const Layout: React.FC<Props> = (props) => {
  const [language, setLanguage] = useState<string>('en');
  const router = useRouter();
  const [isBuilding, setIsBuilding] = useState<boolean>(true);
  useEffect(() => {
    const initialize = () => {
      if (typeof window !== undefined && typeof localStorage !== undefined) {
        const lang = localStorage.getItem('lang') || 'en';
        const token = localStorage.getItem('id_token') || '';
        if (token == '') {
          if (router.pathname !== '/' && router.pathname !== '/login') {
            router.push('/login');
          }
        }
        i18n.changeLanguage(lang);
        setLanguage(lang);
        setIsBuilding(false);
      }
    };
    initialize();
  });

  setTimeout(() => {
    setIsBuilding(false);
  }, 2000);

  return isBuilding ? (
    <MasterLayout>
      <Loading />
    </MasterLayout>
  ) : (
    <MasterLayout>
      <StyledWrapper>
        <Header
          language={language}
          setLanguage={(lang) => setLanguage(lang)}
          isUser={localStorage.getItem('id_token') !== null}
        />
        <AntLayout.Content>{props.children}</AntLayout.Content>
        <AntLayout.Footer>Designed by Saleh</AntLayout.Footer>
      </StyledWrapper>
    </MasterLayout>
  );
};

export default Layout;
