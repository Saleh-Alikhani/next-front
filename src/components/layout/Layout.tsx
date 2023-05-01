import { Layout as AntLayout } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Loading from '../loading/Loading';
import Header from './Header';
import MasterLayout from './MasterLayout';

type Props = {
  children: React.ReactNode;
};

const StyledWrapper = styled(AntLayout)`
  height: 100%;
`;

const Layout: React.FC<Props> = (props) => {
  const [language, setLanguage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { i18n } = useTranslation();
  useEffect(() => {
    if (localStorage.getItem('lang') !== null) {
      i18n.changeLanguage(localStorage.getItem('lang') as string);
      setLanguage(localStorage.getItem('lang') as string);
    }
    const token = localStorage.getItem('id_token');
    if (token === null && router.query.err === undefined) {
      if (
        router.pathname !== '/' &&
        router.pathname !== '/login' &&
        router.pathname !== '/signup'
      ) {
        router.push('/login?err=401');
      }
    } //eslint-disable-next-line
  }, []);
  setTimeout(() => setIsLoading(false), 300);

  return isLoading ? (
    <Loading />
  ) : (
    <MasterLayout>
      <StyledWrapper>
        <Header language={language} setLanguage={(lang) => setLanguage(lang)} />
        <AntLayout.Content style={{ overflow: 'auto' }}>
          {props.children}
        </AntLayout.Content>
        <AntLayout.Footer>Designed by Saleh</AntLayout.Footer>
      </StyledWrapper>
    </MasterLayout>
  );
};

export default Layout;
