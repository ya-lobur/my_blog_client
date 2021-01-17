import React, { FunctionComponent } from 'react';
import { Button, Card } from "antd";
import { HeartTwoTone, ReadOutlined } from "@ant-design/icons";
import { generatePath, Link } from "react-router-dom";
import { RouteTemplates } from "constants/routes";

interface IPostCard {
    id: number;
    title: string;
    description: string;
    totalLikes: number;
}

const PostCard: FunctionComponent<IPostCard> = (props) => {
    const { title, description, totalLikes, id } = props;

    const actions = [
        <Link to={generatePath(RouteTemplates.POST_DETAIL, {id})}>
            <Button icon={<ReadOutlined/>} children={'Читать'} type={"primary"}/>
        </Link>
    ]


    return (
        <Card title={title} actions={actions} extra={<span><HeartTwoTone /> {totalLikes}</span>}>
            <p>{description}</p>
        </Card>
    );
}

export default PostCard;