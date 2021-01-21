import React, { FunctionComponent, useEffect, useState } from 'react';
import classes from './PostWizard.module.css'
import { Col, Row, Typography } from "antd";
import { Form, Input, Button } from 'antd';
import { useParams } from "react-router";
import TextArea from "antd/es/input/TextArea";
import { Simulate } from "react-dom/test-utils";
import { createPost } from "async_actions/post";

const { Title } = Typography

const PostWizard: FunctionComponent = () => {

    const [form] = Form.useForm();
    const { postId } = useParams<{ postId: string }>()
    const [wizardMode, setWizardMode] = useState<'create' | 'update' | undefined>(undefined);

    useEffect(() => {
        if (postId) {
            setWizardMode("update")
        } else {
            setWizardMode("create")
        }
    }, [postId]);

    async function onSubmitHandler(values) {
        if (wizardMode === "create") {
          await createPost(values)
        }
    }


    return (
        <div className={classes.post_wizard}>
            <Row>
                <Col><Title level={1}>Добавление поста</Title></Col>
            </Row>

            <Row className={classes.form}>
                <Col span={24}>
                    <Form form={form} name={'post-wizard'} layout={"vertical"} onFinish={onSubmitHandler}>
                        <Row>
                            <Col span={24}>
                                <Form.Item name={'title'} label={'Заголовок'} rules={[{ required: true, message: 'Заполните это поле' }]}>
                                    <Input type={"text"} size={"large"}/>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24}>
                                <Form.Item name={'description'} label={'Описание'}>
                                    <Input type={"text"} size={"large"}/>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24}>
                                <Form.Item name={'text_content'} label={'Текст поста'}>
                                    <TextArea rows={4} size={"large"}/>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Button htmlType={"submit"} type={"primary"} className={classes.submit_btn}>
                            Создать
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default PostWizard;