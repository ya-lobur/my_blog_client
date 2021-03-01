import React, { FunctionComponent, useState } from 'react';
import { Form, Input, Button, Typography, Divider, Alert } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { login } from "async_actions/profile";
import classes from './Login.module.css'
import { AppState } from "redux/reducers/rootReducer";
import { Redirect, useLocation } from "react-router";
import { RouteTemplates } from "constants/routes";
import { useSearchParams } from "hooks/useSearchParams";


const Login: FunctionComponent = () => {

    const dispatch = useDispatch<(f) => Promise<any>>();
    const query = useSearchParams(useLocation().search);
    const [loginFailedMessage, setLoginFailedMessage] = useState(null);
    const loggedIn = useSelector((state: AppState) => state.profile.loggedIn);


    const onFinish = async (values) => {
        await dispatch(login(values)).catch(({ error }) => setLoginFailedMessage(error));
    };


    return (
        <>
            {loggedIn
                ? <Redirect to={RouteTemplates.ROOT}/>
                : (
                    <Form layout={'vertical'} name="login" className={classes.login_form} onFinish={onFinish}>
                        <div>
                            <Typography.Title level={2}>Вход</Typography.Title>

                            {query.get('verified') === '1' && (
                                <Alert message="Вы успешно прошли верификацию и теперь можете войти" type="success"/>
                            )}

                            {loginFailedMessage && (<Alert message={loginFailedMessage} type="error"/>)}

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