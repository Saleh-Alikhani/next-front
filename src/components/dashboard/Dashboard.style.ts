import { TrashIcon } from '@heroicons/react/24/solid';
import { Form, Layout, Row, Tabs } from 'antd';
import styled from 'styled-components';

export const StyledLayout = styled(Layout)`
  height: 100%;
`;

export const StyledSider = styled(Layout.Sider)`
  background-color: ${({ theme }) => theme.colors.white} !important;
`;

export const StyledTrigger = styled(Row)`
  position: fixed;
  right: 40px;
  top: 100px;
  cursor: pointer;
  width: 50px;
  height: 20px;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius.sm};
`;

export const StyledTabs = styled(Tabs)`
  height: 100%;

  .ant-tabs-content {
    height: 100%;
    justify-content: center;
    margin-top: 24px;
    display: flex;
  }
  .ant-tabs-nav {
    display: none;
  }
`;

export const StyledForm = styled(Form)`
  .ant-form-item-label {
    padding: 0;
  }
`;

export const StyledTrash = styled(TrashIcon)`
  color: ${({ theme }) => theme.colors.blue[100]};
  margin: 4px 8px 0;
  cursor: pointer;
`;
