import React, { FunctionComponent, useState } from 'react';
import { Layout, Menu } from "antd";
import { DesktopOutlined, FileOutlined, PieChartOutlined } from "@ant-design/icons";
import classes from './MainSider.module.css'

const { Sider } = Layout;

const MainSider: FunctionComponent = (props) => {
    const [collapsed, setCollapsed] = useState(true);


    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(collapsed) => setCollapsed(collapsed)}>
            <Menu mode="inline" theme={"dark"} className={classes.main_sider}>
                <Menu.Item key="1" icon={<PieChartOutlined/>}>
                    Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined/>}>
                    Option 2
                </Menu.Item>
                <Menu.Item key="9" icon={<FileOutlined/>}>
                    Files
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default MainSider;