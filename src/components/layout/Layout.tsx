import { useUser } from '@auth0/nextjs-auth0/client';
import Loading from '@components/loading/Loading';
import { Layout as AntLayout } from 'antd';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import i18n from '@/utils/i18n';

import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const StyledWrapper = styled(AntLayout)`
  height: 100%;
`;

const Layout: React.FC<Props> = (props) => {
  const { user, isLoading, error } = useUser();
  const [language, setLanguage] = useState<string>('en');
  const [isBuilding, setIsBuilding] = useState<boolean>(true);

  useEffect(() => {
    const initialize = () => {
      if (typeof window !== undefined && typeof localStorage !== undefined) {
        const lang = localStorage.getItem('lang') || 'en';
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

  return isLoading || error || isBuilding ? (
    <Loading />
  ) : (
    <StyledWrapper>
      <Header
        user={user}
        language={language}
        setLanguage={(lang) => setLanguage(lang)}
      />
      <AntLayout.Content>{props.children}</AntLayout.Content>
      <AntLayout.Footer>Designed by Saleh</AntLayout.Footer>
    </StyledWrapper>
  );
};

export default Layout;
