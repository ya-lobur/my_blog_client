import React, { FunctionComponent, useEffect, useState } from 'react';
import { IPost } from "interfaces/post";
import { getDailyTopPosts } from "async_actions/post";
import { Spin } from "antd";
import classes from './DailyPostList.module.css'
import { renderPostList } from './utils';

const DailyPostList: FunctionComponent = () => {
    const [topPosts, setTopPosts] = useState<Required<IPost>[] | null>(null);

    useEffect(() => {
        getDailyTopPosts().then((posts) => setTopPosts(posts))
    }, []);


    return (
        <div className={classes.DailyPostList}>
            {topPosts
                ? renderPostList(topPosts)
                : <Spin size="large"/>
            }
        </div>
    );
}

export default DailyPostList;