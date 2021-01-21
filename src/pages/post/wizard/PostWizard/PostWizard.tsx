import React, { FunctionComponent, useEffect, useState } from 'react';
import classes from './PostWizard.module.css'
import { Col, Row, Typography } from "antd";
import { Form, Input, Button } from 'antd';
import { useParams } from "react-router";
import TextArea from "antd/es/input/TextArea";
import { createPost, getCertainPost } from "async_actions/post";
import { useDispatch } from "react-redux";
import { IPostModel } from "interfaces/post";
import { getSubmitBtnTitle, getTitle } from "pages/post/wizard/PostWizard/utils";

const { Title } = Typography

export type WizardModeType = 'create' | 'update' | undefined;

const PostWizard: FunctionComponent = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch<(f) => Promise<Required<IPostModel>>>();
    const { postId } = useParams<{ postId: string }>();
    const [wizardMode, setWizardMode] = useState<WizardModeType>(undefined);

    useEffect(() => {
        form.resetFields();
        if (postId) {
            setWizardMode("update");
            dispatch(getCertainPost(postId, false)).then((data) => {
                form.setFieldsValue(data)
            })
        } else {
            setWizardMode("create");
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
                <Col><Title level={1}>{getTitle(wizardMode)}</Title></Col>
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
                                    <TextArea rows={10} size={"large"}/>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Button htmlType={"submit"} type={"primary"} className={classes.submit_btn}>
                            {getSubmitBtnTitle(wizardMode)}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default PostWizard;