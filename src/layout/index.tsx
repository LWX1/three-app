import React from "react";
import { Layout } from 'antd';
import HeaderMenu from "src/layout/header";
import SiderMenu from "src/layout/sider";
import { Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const LayoutCom = (props:any) => {
    // console.log(  props)
    return (
        <Layout>
            <Header>
                <HeaderMenu />
            </Header>
            <Layout>
                <Sider>
                    <SiderMenu />
                </Sider>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutCom;