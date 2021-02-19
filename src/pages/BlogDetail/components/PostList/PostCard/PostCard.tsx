import React, { FunctionComponent } from 'react';
import { IPostModel } from "interfaces/post";
import { Card, List } from 'antd';
import moment from "moment";
interface IPostCard {
    post: IPostModel;
}

const PostCard: FunctionComponent<IPostCard> = (props) => {
    const { post } = props;


    return (
        <List.Item>
            <Card title={post.title} extra={moment(post.updated).format('DD.MM.YY HH:mm')}>
                {post.description}
            </Card>
        </List.Item>
    );
}

export default PostCard;