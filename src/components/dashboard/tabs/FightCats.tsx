import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { useGetCurrentUserQuery } from '@src/app/login.generated';
import { CAT_PICS } from '@src/constants/sounds';
import { Col, Modal, Popover, Row, Typography } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Loading from '../../loading/Loading';
import { GetCatsQuery, GetUsersQuery } from './cats.generated';
import { StyledRow, StyledTable } from './MyCats.style';

type Props = {
  data: GetCatsQuery;
  users: GetUsersQuery;
};

const FightCats: React.FC<Props> = (props) => {
  const [selectedCat, setSelectedCat] = useState<
    GetCatsQuery['cats'][number] | null
  >(null);
  const { data } = useGetCurrentUserQuery();

  const { t, i18n } = useTranslation();

  const columns = [
    {
      key: 'name',
      dataIndex: 'name',
      title: t('Name'),
      width: 240,
      render: (value: string) => <StyledRow>{value}</StyledRow>,
    },
    {
      key: 'age',
      dataIndex: 'age',
      title: t('Age'),
      width: 190,
      render: (value: string) => <StyledRow>{value}</StyledRow>,
    },
    {
      key: 'breed',
      dataIndex: 'breed',
      title: t('Breed'),
      width: 320,
      render: (value: string) => <StyledRow>{value}</StyledRow>,
    },
    {
      key: 'owner',
      dataIndex: 'userId',
      title: t('Owner'),
      width: 380,
      render: (value: string) => {
        const owner = props.users?.usersById.find((user) => user.id === value);
        return owner?.id === data?.currentUser.id ? (
          <StyledRow>Your cat</StyledRow>
        ) : (
          <StyledRow>{owner?.name}</StyledRow>
        );
      },
    },
    {
      key: 'actions',
      render: (_: any, cat: any) =>
        cat.userId === data?.currentUser.id ? (
          <></>
        ) : (
          <Popover content="Content" title="Title">
            <EllipsisVerticalIcon width={20} height={20} />
          </Popover>
        ),
      title: t('Actions'),
    },
  ];

  return !props.data ? (
    <Loading />
  ) : (
    <>
      <Typography.Title dir={i18n.language === 'fa' ? 'rtl' : undefined}>
        {t('Fight')}
      </Typography.Title>
      <StyledTable
        className="pointer"
        dataSource={props.data.cats}
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
              setSelectedCat(cat as GetCatsQuery['cats'][number]);
            },
          };
        }}
      />
      {selectedCat && (
        <Modal
          centered
          open={selectedCat !== null}
          footer={null}
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
              <StyledRow>
                Owner:
                {
                  props.users?.usersById.find(
                    (user) => user.id === selectedCat.userId
                  )?.name
                }
              </StyledRow>
            </Col>
          </Row>
        </Modal>
      )}
    </>
  );
};

export default FightCats;
