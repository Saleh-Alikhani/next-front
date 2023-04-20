import { Button } from 'antd';
import styled from 'styled-components';

type Props = {
  $margin?: string;
};

export const StyledButton = styled(Button)<Props>`
  margin: ${({ $margin }) => $margin};
`;
