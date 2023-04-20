import { CAT_BREEDS } from '@src/constants/common';
import { Form, Input, Select } from 'antd';

import Button from '../shared/Button';
import { StyledForm } from './Dashboard.style';

type Props = {
  onFinish: (fields: any) => void;
  isLoading: boolean;
};

const CreateCatForm: React.FC<Props> = (props) => {
  return (
    <StyledForm layout="vertical" onFinish={props.onFinish}>
      <Form.Item
        name="name"
        label="Name of Cat:"
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
        label="Age of Cat:"
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
        label="Breed of Cat:"
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
          $margin="10px 2px"
          loading={props.isLoading}
        >
          Submit
        </Button>
      </Form.Item>
    </StyledForm>
  );
};

export default CreateCatForm;
