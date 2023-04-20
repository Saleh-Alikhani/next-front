import { ButtonProps } from 'antd';

import { StyledButton } from './Button.style';

type Props = ButtonProps & {
  children: React.ReactNode;
  $margin?: string;
};

const Button: React.FC<Props> = ({ children, ...restProps }) => {
  return <StyledButton {...restProps}>{children}</StyledButton>;
};

export default Button;
