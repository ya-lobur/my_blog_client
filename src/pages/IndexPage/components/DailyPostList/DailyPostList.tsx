import React, { FunctionComponent, useEffect, useState } from 'react';
import { IPost } from "interfaces/post";
import { getDailyTopPosts } from "async_actions/post";
import PostCard from './PostCard/PostCard';
import { Col, Row } from "antd";
import classes from './DailyPostList.module.css'

const DailyPostList: FunctionComponent = () => {
    const [topPosts, setTopPosts] = useState<Required<IPost>[] | null>(null);

    useEffect(() => {
        getDailyTopPosts().then((posts) => setTopPosts(posts))
    }, []);

    return (
        <div className={classes.DailyPostList}>
            {topPosts
                ? (
                    <Row justify={'space-between'} gutter={[16, 32]}>
                        {
                            topPosts.map(post => (
                                <Col span={8} key={post.id}>
                                    <PostCard id={post.id} title={post.title} description={post.description}/>
                                </Col>
                            ))
                        }
                    </Row>
                )
                : null
            }
        </div>
    );
}

export default DailyPostList;