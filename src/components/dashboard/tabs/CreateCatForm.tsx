import { CAT_BREEDS } from '@src/constants/sounds';
import { Form, Input, Select, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import Button from '../../shared/Button';
import { StyledForm } from '../Dashboard.style';
import { useCreateCatMutation } from './cats.generated';

type Props = {
  onFinish: () => void;
};

const CreateCatForm: React.FC<Props> = (props) => {
  const { t, i18n } = useTranslation();
  const [createCat, createCatRes] = useCreateCatMutation();

  const handleFinish = (fields: any) => {
    createCat({
      input: {
        name: fields.name,
        age: Number(fields.age),
        breed: fields.breed,
      },
    }).then(() => props.onFinish());
  };

  return (
    <StyledForm
      layout="vertical"
      onFinish={handleFinish}
      dir={i18n.language === 'fa' ? 'rtl' : undefined}
    >
      <Typography.Title>{t('Create')}</Typography.Title>
      <Form.Item
        name="name"
        label={`${t('catName')}:`}
        rules={[
          {
            required: true,
            message: 'At least 3 characters required.',
            min: 3,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label={`${t('catAge')}:`}
        rules={[
          {
            required: true,
            message: 'Input a number.',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="breed"
        label={`${t('catBreed')}:`}
        rules={[
          {
            required: true,
            message: 'Choose a breed.',
          },
        ]}
      >
        <Select>
          {CAT_BREEDS.map((breed) => (
            <Select.Option key={breed.key}>{breed.label}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          $margin="10px 58px"
          loading={createCatRes.isLoading}
        >
          {t('Create')}
        </Button>
      </Form.Item>
    </StyledForm>
  );
};

export default CreateCatForm;
