import React from 'react';
import { Layout } from 'antd';
import ZYHeader from '../zy-header/ZYHeader';
import ZYLogin from '../zy-login/ZYLogin';
const { Content } = Layout;

export default () => {
  return (
    <Layout>
      <ZYHeader />
      <Content className="zy-content">
        <ZYLogin />
      </Content>
    </Layout>
  );
};
