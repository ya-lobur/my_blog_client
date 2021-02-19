import React, { FunctionComponent } from 'react';
import { Button, Card, Typography } from "antd";
import { HeartTwoTone, ReadOutlined } from "@ant-design/icons";
import { generatePath, Link } from "react-router-dom";
import { RouteTemplates } from "constants/routes";
import classes from './PostCard.module.css'

interface IPostCard {
    postId: number;
    title: string;
    description: string;
    totalLikes: number;
}

const PostCard: FunctionComponent<IPostCard> = (props) => {
    const { title, description, totalLikes, postId } = props;

    const actions = [
        <Link to={generatePath(RouteTemplates.POST_DETAIL, { postId })}>
            <Button icon={<ReadOutlined/>} children={'Читать'} type={"primary"}/>
        </Link>
    ]


    return (
        <Card title={<h2>{title}</h2>} actions={actions} className={classes.post_card}
              extra={<span className={classes.extra}><HeartTwoTone/> {totalLikes}</span>}
        >
            <Typography.Paragraph  >{description}</Typography.Paragraph>
        </Card>
    );
}

export default PostCard;