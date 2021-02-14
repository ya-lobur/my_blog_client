import React, { FunctionComponent } from 'react';
import { Form, Input, Button, Typography, Divider } from 'antd';
import { useDispatch } from "react-redux";
import { getProfile, login } from "async_actions/profile";
import classes from './Login.module.css'


const Login: FunctionComponent = () => {

    const dispatch = useDispatch();

    const  onFinish = async (values) => {
        await dispatch(login(values))
        await dispatch(getProfile())
    };


    return (
        <Form layout={'vertical'} name="login" className={classes.login_form} onFinish={onFinish}>
             <div>
                <Typography.Title level={2}>Вход</Typography.Title>
                <Divider />
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
    );
}

export default Login;