import { Modal, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';

import Loading from '../loading/Loading';
import { GetCatsQuery } from './cats.generated';
import { StyledTrash } from './Dashboard.style';

type Props = {
  onDelete: (id: string) => void;
  data: GetCatsQuery;
};

const PresentCats: React.FC<Props> = (props) => {
  const [selectedCat, setSelectedCat] = useState<
    GetCatsQuery['cats'][number] | null
  >(null);
  const columns: ColumnsType<GetCatsQuery['cats'][number]> = [
    { key: 'name', dataIndex: 'name', title: 'name', width: 160 },
    { key: 'age', dataIndex: 'age', title: 'age', width: 100 },
    { key: 'breed', dataIndex: 'breed', title: 'breed', width: 180 },
    {
      key: 'actions',
      render: (_, data) => (
        <StyledTrash height={18} onClick={() => props.onDelete(data.id)} />
      ),
      title: 'delete',
    },
  ];
  return !props.data ? (
    <Loading />
  ) : (
    <>
      <Table
        dataSource={props.data.cats}
        columns={columns}
        onRow={(cat) => {
          return {
            onClick: () => setSelectedCat(cat),
          };
        }}
      />
      {selectedCat && (
        <Modal
          open={selectedCat !== null}
          onCancel={() => setSelectedCat(null)}
        >
          {selectedCat.name}
        </Modal>
      )}
    </>
  );
};

export default PresentCats;
