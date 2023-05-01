import { TabsProps } from 'antd';

import { StyledTabs } from '../Dashboard.style';
import {
  useDeleteCatMutation,
  useGetCatsQuery,
  useGetMyCatsQuery,
  useGetUsersQuery,
} from './cats.generated';
import CreateCatForm from './CreateCatForm';
import FightCats from './FightCats';
import MyCats from './MyCats';

type Props = TabsProps & {
  activeTab: string;
  setActiveTab: (flag: string) => void;
};

const Tabs: React.FC<Props> = ({ setActiveTab, activeTab, ...rest }) => {
  const { data, isLoading, refetch } = useGetMyCatsQuery();
  const { data: allCats, refetch: catsRefetch } = useGetCatsQuery();
  const Ids = allCats?.cats.map((cat) => cat.userId);
  const { data: users } = useGetUsersQuery({
    Ids: Ids || [],
  });
  const [deleteCat] = useDeleteCatMutation();

  return isLoading || !data || !allCats || !users ? (
    <></>
  ) : (
    <StyledTabs
      {...rest}
      items={[
        {
          label: 'My cats',
          key: 'myCats',
          children: (
            <MyCats
              onDelete={(id) =>
                deleteCat({ CatId: id }).then(() => {
                  refetch();
                  catsRefetch();
                })
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
              onFinish={() => {
                refetch();
                catsRefetch();
                setTimeout(() => setActiveTab('present'), 300);
              }}
            />
          ),
        },
        {
          label: 'Fight',
          key: 'fight',
          children: <FightCats data={allCats} users={users} />,
        },
      ]}
      activeKey={activeTab}
    />
  );
};

export default Tabs;
