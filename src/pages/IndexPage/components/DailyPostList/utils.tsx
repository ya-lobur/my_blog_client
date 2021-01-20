import React from "react";
import { IPostModel } from "interfaces/post";
import { Col, Empty, Row } from "antd";
import PostCard from "./PostCard/PostCard";


export const renderPostList = (posts: Required<IPostModel>[]) => {
    if (posts.length) {
        return (
            <Row justify={'space-between'} gutter={[16, 32]}>
                {
                    posts.map(post => (
                        <Col span={8} key={post.id}>
                            <PostCard id={post.id} title={post.title} description={post.description} totalLikes={post.liked_by.length}/>
                        </Col>
                    ))
                }
            </Row>
        )
    }
    return <Empty/>
}