import React, { FunctionComponent } from 'react';
import { Card } from "antd";

interface IPostCard {
    id: number;
    title: string;
    description: string;
}

const PostCard: FunctionComponent<IPostCard> = (props) => {
    const {title, description} = props;

    return (
        <Card title={title}>
            <p>{description}</p>
        </Card>
    );
}

export default PostCard;