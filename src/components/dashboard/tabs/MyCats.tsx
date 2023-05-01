import { CAT_PICS } from '@src/constants/sounds';
import { Col, Modal, Row, Typography } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Loading from '../../loading/Loading';
import { StyledTrash } from '../Dashboard.style';
import { GetMyCatsQuery } from './cats.generated';
import { StyledRow, StyledTable } from './MyCats.style';

type Props = {
  onDelete: (id: string) => void;
  data: GetMyCatsQuery;
};

const MyCats: React.FC<Props> = (props) => {
  const [selectedCat, setSelectedCat] = useState<
    GetMyCatsQuery['myCats'][number] | null
  >(null);
  const { t, i18n } = useTranslation();

  const columns = [
    { key: 'name', dataIndex: 'name', title: t('Name'), width: 380 },
    { key: 'age', dataIndex: 'age', title: t('Age'), width: 290 },
    { key: 'breed', dataIndex: 'breed', title: t('Breed'), width: 460 },
    {
      key: 'actions',
      render: (_: any, data: any) => (
        <StyledTrash height={18} onClick={() => props.onDelete(data.id)} />
      ),
      title: t('Delete'),
    },
  ];

  return !props.data ? (
    <Loading />
  ) : (
    <>
      <Typography.Title dir={i18n.language === 'fa' ? 'rtl' : undefined}>
        {t('My_Cats')}
      </Typography.Title>
      <StyledTable
        className="pointer"
        dataSource={props.data.myCats}
        columns={columns}
        onRow={(cat) => {
          return {
            onClick: (event: any) => {
              if (
                event.target.localName === 'path' ||
                event.target.localName === 'svg'
              ) {
                return;
              }
              setSelectedCat(cat as GetMyCatsQuery['myCats'][number]);
            },
          };
        }}
      />
      {selectedCat && (
        <Modal
          centered
          open={selectedCat !== null}
          onCancel={() => setSelectedCat(null)}
          okButtonProps={{
            style: {
              display: 'none',
            },
          }}
          cancelButtonProps={{
            style: {
              display: 'none',
            },
          }}
        >
          <Row gutter={[20, 0]} justify="center" align="middle">
            <Col span={10}>
              <img
                src={
                  Object.getOwnPropertyDescriptor(CAT_PICS, selectedCat.breed)
                    ?.value
                }
                width={150}
                height={150}
                alt="Cat Pic"
              />
            </Col>
            <Col span={10}>
              <StyledRow>Name: {selectedCat.name}</StyledRow>
              <StyledRow>Age: {selectedCat.age}</StyledRow>
              <StyledRow>Breed: {selectedCat.breed}</StyledRow>
            </Col>
          </Row>
        </Modal>
      )}
    </>
  );
};

export default MyCats;
