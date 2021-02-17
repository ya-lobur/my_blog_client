import React, { FunctionComponent } from 'react';
import { Form, Input, Button, Typography, Divider } from 'antd';
import { useDispatch } from "react-redux";
import classes from './Registration.module.css'
import { register } from "async_actions/profile";
import { IRegistrationData } from "interfaces/profile";
import { useHistory } from "react-router";
import { RouteTemplates } from "constants/routes";


const Registration: FunctionComponent = () => {

    const history = useHistory()
    const dispatch = useDispatch<(f) => Promise<any>>();

    const onFinish = async (values: IRegistrationData) => {
        await dispatch(register(values));
        history.push(RouteTemplates.LOGIN);
    };


    return (
        <Form layout={'vertical'} name="registration" className={classes.registration_form} onFinish={onFinish}>
            <div>
                <Typography.Title level={2}>Регистрация</Typography.Title>
                <Divider/>
            </div>

            <Form.Item label="E-mail" name="email"
                       rules={[{ required: true, message: 'Укажите Ваш e-mail' }]}
            >
                <Input type={"email"}/>
            </Form.Item>

            <Form.Item label="Пароль" name="password"
                       rules={[{ required: true, message: 'Введите Ваш пароль' }]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item label="Подтвердите пароль" name="password_confirm"
                       rules={[{ required: true, message: 'Введите Ваш пароль' }]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item label="Имя" name="first_name"
                       rules={[{ required: true, message: 'Введите Ваше имя' }]}
            >
                <Input/>
            </Form.Item>

            <Form.Item label="Фамилия" name="last_name">
                <Input/>
            </Form.Item>


            <Form.Item className={classes.submit_btn}>
                <Button type="primary" htmlType="submit" size={'large'}>
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Registration;