import { Layout as AntLayout } from 'antd';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from './theme';

type Props = {
  children: React.ReactNode;
};

const Layout = styled(AntLayout)`
  height: 100%;
`;

const MasterLayout: React.FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Saleh&apos;s Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>{props.children}</Layout>
      </ThemeProvider>
    </>
  );
};

export default MasterLayout;
