import React, { FunctionComponent } from 'react';
import { Col, Layout, Row } from "antd";
import classes from './MainHeader.module.css'
import { useRouteMatch } from "react-router";
import { RouteTemplates } from "constants/routes";
import { HomeFilled, HomeOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import ExtraInfo from "layouts/MainLayout/components/MainHeader/components/ExtraInfo/ExtraInfo";

const MainHeader: FunctionComponent = () => {

    const { Header } = Layout;
    const isMainPage = useRouteMatch({ path: RouteTemplates.ROOT, exact: true })


    return (
        <Header className={classes.main_header}>
                <Row>
                    <Col>
                        <Link to={RouteTemplates.ROOT} className={classes.home_link}>
                            {isMainPage ? <HomeOutlined/> : <HomeFilled/>}
                        </Link>
                    </Col>

                </Row>
            <ExtraInfo/>
        </Header>
    );
}

export default MainHeader;