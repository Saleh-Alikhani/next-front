import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/solid';
import { Button, Layout } from 'antd';
import styled from 'styled-components';

export const StyledHeader = styled(Layout.Header)`
  padding: 0 10px;
  background-color: white;
`;

export const StyledIcon = styled(GlobeAsiaAustraliaIcon)`
  position: fixed;
  top: 4px;
  left: 4px;
  cursor: pointer;
  color: green;
`;

export const StyledButton = styled(Button)`
  margin-right: 20px;
`;
