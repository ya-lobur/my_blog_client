import React, { FunctionComponent, useEffect } from 'react';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "redux/reducers/rootReducer";
import { getCertainPost, likePost } from "async_actions/post";
import { Button, Card, Col, Divider, Row, Space } from "antd";
import classes from './PostDetail.module.css'
import { Typography } from 'antd';
import { HeartTwoTone } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const PostDetail: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { id: postId } = useParams<{ id: string }>();
    const currentPost = useSelector((state: AppState) => state.post.currentPost);

    useEffect(() => {
        dispatch(getCertainPost(postId))
    }, [postId]);



    return (
        <div className={classes.post_detail}>
            {currentPost && (
                <Card title={<Title level={2}>{currentPost.title}</Title>}
                      extra={`${currentPost.author?.last_name} ${currentPost.author?.first_name}`}

                >
                    <Paragraph>{currentPost.text_content}</Paragraph>

                    <Divider/>

                    <Row justify={"end"}>
                        <Col>
                            <Space>
                                <Button icon={<HeartTwoTone/>} type={"dashed"} onClick={() => dispatch(likePost(currentPost.id))}>
                                    <span>{currentPost?.liked_by?.length}</span>
                                </Button>
                            </Space>
                        </Col>
                    </Row>
                </Card>
            )}
        </div>
    );
}

export default PostDetail;