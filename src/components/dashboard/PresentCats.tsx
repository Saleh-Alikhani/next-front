import { TrashIcon } from '@heroicons/react/24/solid';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import Loading from '../loading/Loading';
import { GetCatsQuery } from './cats.generated';

type Props = {
  onDelete: (id: string) => void;
  data: GetCatsQuery;
};

const PresentCats: React.FC<Props> = (props) => {
  const columns: ColumnsType<GetCatsQuery['cats'][number]> = [
    { key: 'name', dataIndex: 'name' },
    { key: 'age', dataIndex: 'age' },
    { key: 'breed', dataIndex: 'breed' },
    {
      key: 'actions',
      render: (_, data) => (
        <TrashIcon height={18} onClick={() => props.onDelete(data.id)} />
      ),
    },
  ];
  return !props.data ? (
    <Loading />
  ) : (
    <Table dataSource={props.data.cats} columns={columns} />
  );
};

export default PresentCats;
