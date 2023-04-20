import Dashboard from '@src/components/dashboard/Dashboard';
import Layout from '@src/components/layout/Layout';
import { NextPage } from 'next';

const DashboardPage: NextPage = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default DashboardPage;
