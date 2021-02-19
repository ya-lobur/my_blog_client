import React, { FunctionComponent } from 'react';
import { Form, Input, Button, Typography, Divider } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { login } from "async_actions/profile";
import classes from './Login.module.css'
import { AppState } from "redux/reducers/rootReducer";
import { Redirect } from "react-router";
import { RouteTemplates } from "constants/routes";


const Login: FunctionComponent = () => {

    const dispatch = useDispatch();
    const loggedIn = useSelector((state: AppState) => state.profile.loggedIn)

    const onFinish = async (values) => {
        await dispatch(login(values))
    };


    return (
        <>
            {loggedIn
                ? <Redirect to={RouteTemplates.ROOT}/>
                : (
                    <Form layout={'vertical'} name="login" className={classes.login_form} onFinish={onFinish}>
                        <div>
                            <Typography.Title level={2}>Вход</Typography.Title>
                            <Divider/>
                        </div>

                        <Form.Item
                            label="E-mail"
                            name="email"
                            rules={[{ required: true, message: 'Укажите Ваш e-mail' }]}
                        >
                            <Input type={"email"}/>
                        </Form.Item>

                        <Form.Item
                            label="Пароль"
                            name="password"
                            rules={[{ required: true, message: 'Введите Ваш пароль' }]}
                        >
                            <Input.Password/>
                        </Form.Item>


                        <Form.Item className={classes.submit_btn}>
                            <Button type="primary" htmlType="submit" size={'large'}>
                                Войти
                            </Button>
                        </Form.Item>
                    </Form>
                )
            }
        </>
    );
}

export default Login;