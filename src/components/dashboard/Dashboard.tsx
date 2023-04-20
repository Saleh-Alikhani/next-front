import { Layout, Menu } from 'antd';
import { useState } from 'react';

import {
  useCreateCatMutation,
  useDeleteCatMutation,
  useGetCatsQuery,
} from './cats.generated';
import CreateCatForm from './CreateCatForm';
import { StyledLayout, StyledSider, StyledTabs } from './Dashboard.style';
import PresentCats from './PresentCats';

const Dashboard: React.FC = () => {
  const [createCat, createCatRes] = useCreateCatMutation();
  const [activeTab, setActiveTab] = useState<string>('create');
  const { data, isLoading, refetch } = useGetCatsQuery();
  const [deleteCat] = useDeleteCatMutation();

  return isLoading || !data ? (
    <></>
  ) : (
    <StyledLayout>
      <Layout.Content>
        <StyledTabs
          items={[
            {
              label: 'Present',
              key: 'present',
              children: (
                <PresentCats
                  onDelete={(id) =>
                    deleteCat({ CatId: id }).then(() => refetch())
                  }
                  data={data}
                />
              ),
            },
            {
              label: 'Create',
              key: 'create',
              children: (
                <CreateCatForm
                  isLoading={createCatRes.isLoading}
                  onFinish={(fields: any) => {
                    createCat({
                      input: {
                        name: fields.name,
                        age: Number(fields.age),
                        breed: fields.breed,
                      },
                    }).then(() => refetch());
                    setActiveTab('present');
                  }}
                />
              ),
            },
          ]}
          activeKey={activeTab}
        />
      </Layout.Content>
      <StyledSider width={250} collapsed={false}>
        <Menu
          defaultSelectedKeys={['create']}
          selectedKeys={[activeTab]}
          items={[
            {
              label: 'cats',
              type: 'group',
              children: [
                {
                  label: 'create',
                  key: 'create',
                  onClick: (info) => setActiveTab(info.key),
                },
                {
                  label: 'Present',
                  key: 'present',
                  onClick: (info) => setActiveTab(info.key),
                },
              ],
            },
          ]}
        />
      </StyledSider>
    </StyledLayout>
  );
};

export default Dashboard;
