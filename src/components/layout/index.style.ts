import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/solid';
import { Button, Col, Layout } from 'antd';
import styled from 'styled-components';

export const StyledHeader = styled(Layout.Header)`
  padding: 0 20px;
  background-color: white;
`;

export const StyledIcon = styled(GlobeAsiaAustraliaIcon)`
  position: fixed;
  top: 4px;
  left: 4px;
  cursor: pointer;
  color: green;
`;

export const StyledButtons = styled(Col)`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin-right: 20px;
`;
