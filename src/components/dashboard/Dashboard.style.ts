import { Form, Layout, Tabs } from 'antd';
import styled from 'styled-components';

export const StyledLayout = styled(Layout)`
  height: 100%;
`;

export const StyledSider = styled(Layout.Sider)`
  background-color: ${({ theme }) => theme.colors.white} !important;
`;

export const StyledTabs = styled(Tabs)`
  height: 100%;

  .ant-tabs-content {
    height: 100%;
    justify-content: center;
    align-items: center;
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
