import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "redux/reducers/rootReducer";
import { Avatar, Button, Col, Dropdown, Menu, Row } from "antd";
import { Link } from "react-router-dom";
import { RouteTemplates } from "constants/routes";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import classes from './ProfileBar.module.css'
import { logout } from "async_actions/profile";

const ProfileBar: FunctionComponent = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state: AppState) => state.profile.profileData);


    if (profile) {
        const Bar = (
            <Menu>
                <Menu.Item>Профиль</Menu.Item>
                <Menu.Item onClick={() => dispatch(logout())}>Выйти</Menu.Item>
            </Menu>
        );
        return (
            <Dropdown overlay={Bar} trigger={['click']}>
                <Button type={'link'}>
                    <span className={classes.user}>
                        <Avatar icon={<UserOutlined/>}/> {profile.last_name} {profile.first_name} <DownOutlined/>
                    </span>
                </Button>
            </Dropdown>
        );
    }

    return (
        <Row>
            <Col>
                <Link to={RouteTemplates.LOGIN} className={classes.login_link}>
                    Войти
                </Link>
            </Col>

            <Col offset={1}>
                <Link to={RouteTemplates.REGISTRATION} className={classes.reg_link}>
                    Зарегистрироваться
                </Link>
            </Col>
        </Row>
    );
}

export default ProfileBar;
