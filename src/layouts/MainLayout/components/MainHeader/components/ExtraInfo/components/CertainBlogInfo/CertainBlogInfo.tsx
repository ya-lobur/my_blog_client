import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "redux/reducers/rootReducer";
import { Button, Col, Row, Typography } from "antd";
import { useParams } from "react-router";
import { getBlogInfo } from "async_actions/blog";
import { setBlogInfo } from "redux/actionCreators/blog";
import classes from './CertainBlogInfo.module.css'

const CertainBlogInfo: FunctionComponent = () => {

    const dispatch = useDispatch();
    const { blogId } = useParams<{ blogId: string }>();
    const blogInfo = useSelector((state: AppState) => state.blog.blogInfo);

    useEffect(() => {
        dispatch(getBlogInfo(blogId));

        return () => {
            dispatch(setBlogInfo(null));
        };
    }, [blogId, dispatch]);


    if (blogInfo) {
        return (
            <div className={classes.certain_blog_info}>
                <Row justify={"center"}>
                    <Col>
                        <Typography.Title>{blogInfo.owner.last_name} {blogInfo.owner.first_name}</Typography.Title>
                    </Col>
                </Row>

                <Row justify={"center"}>
                    <Col>
                        <Button children={'Подписаться'} type={"primary"}/>
                    </Col>

                    <Col>
                        <Button children={'980 Подписчиков'} type={"text"}/>
                    </Col>

                    <Col>
                        <Button children={'Описание'} type={'text'}/>
                    </Col>
                </Row>
            </div>
        );
    }

    return null;
}

export default CertainBlogInfo;