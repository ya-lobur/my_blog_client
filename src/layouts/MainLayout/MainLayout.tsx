import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import classes from './MainLayout.module.css'
import MainHeader from './components/MainHeader/MainHeader';

const { Content, Footer } = Layout;

const MainLayout: FunctionComponent = ({ children }) => {

    return (
        <Layout className={classes.main_layout}>

            <MainHeader/>

            <Content className={classes.content}>
                {children}
            </Content>

            <Footer className={classes.footer}>"My Blog" Created by Ya-Lobur ©2021</Footer>
        </Layout>
    );
}

export default MainLayout;