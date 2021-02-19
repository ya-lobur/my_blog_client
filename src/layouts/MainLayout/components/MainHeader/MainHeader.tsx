import React, { FunctionComponent } from 'react';
import { Col, Layout, Row } from "antd";
import classes from './MainHeader.module.css'
import { useRouteMatch } from "react-router";
import { RouteTemplates } from "constants/routes";
import { HomeFilled, HomeOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import ExtraInfo from "layouts/MainLayout/components/MainHeader/components/ExtraInfo/ExtraInfo";
import ProfileBar from "components/ProfileBar/ProfileBar";

const MainHeader: FunctionComponent = () => {

    const { Header } = Layout;
    const isMainPage = useRouteMatch({ path: RouteTemplates.ROOT, exact: true });


    return (
        <Header className={classes.main_header}>
            <Row justify={'space-between'}>
                <Col>
                    <Link to={RouteTemplates.ROOT} className={classes.header_link}>
                        {isMainPage ? <HomeOutlined/> : <HomeFilled/>}
                    </Link>
                </Col>

                <Col>
                    <ExtraInfo/>
                </Col>

                <Col span={3}>
                    <ProfileBar/>
                </Col>
            </Row>


        </Header>
    );
}

export default MainHeader;