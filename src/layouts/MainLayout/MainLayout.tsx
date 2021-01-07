import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import classes from './MainLayout.module.css'
import MainSider from "layouts/MainLayout/components/MainSider/MainSider";

const { Header, Content, Footer } = Layout;

const MainLayout: FunctionComponent = ({ children }) => {

    return (
        <Layout className={classes.main_layout}>
            <MainSider/>

            <Layout>
                <Header className={classes.header}/>
                <Content>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>"My Blog" Created by Ya-Lobur ©2021</Footer>
            </Layout>
        </Layout>
    );
}

export default MainLayout;