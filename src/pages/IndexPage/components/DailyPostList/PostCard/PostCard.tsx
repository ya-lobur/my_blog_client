import React, { FunctionComponent } from 'react';
import { Button, Card } from "antd";
import { HeartTwoTone, ReadOutlined } from "@ant-design/icons";

interface IPostCard {
    id: number;
    title: string;
    description: string;
    totalLikes: number;
}

const PostCard: FunctionComponent<IPostCard> = (props) => {
    const { title, description, totalLikes } = props;

    const actions = [
        <Button icon={<ReadOutlined/>} children={'Читать'} type={"primary"}/>
    ]


    return (
        <Card title={title} actions={actions} extra={<span><HeartTwoTone /> {totalLikes}</span>}>
            <p>{description}</p>
        </Card>
    );
}

export default PostCard;