import React, { FunctionComponent, useState } from 'react';
import { Layout, Menu } from "antd";
import { DesktopOutlined, FileOutlined, HomeOutlined, PlusCircleOutlined } from "@ant-design/icons";
import classes from './MainSider.module.css'
import { Link } from 'react-router-dom';
import { RouteTemplates } from "constants/routes";

const { Sider } = Layout;

const MainSider: FunctionComponent = (props) => {
    const [collapsed, setCollapsed] = useState(true);


    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(collapsed) => setCollapsed(collapsed)}>
            <Menu mode="inline" theme={"dark"} className={classes.main_sider}>

                <Menu.Item key={RouteTemplates.ROOT} icon={<HomeOutlined />}>
                    <Link to={RouteTemplates.ROOT} >На главную</Link>
                </Menu.Item>

                <Menu.Item key={RouteTemplates.POST_CREATE} icon={<PlusCircleOutlined />}>
                    <Link to={RouteTemplates.POST_CREATE} >Создать пост</Link>
                </Menu.Item>

                <Menu.Item key="9" icon={<FileOutlined/>}>
                    Files
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default MainSider;