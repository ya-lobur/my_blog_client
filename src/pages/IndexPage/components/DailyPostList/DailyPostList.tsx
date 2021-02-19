import React, { FunctionComponent, useEffect, useState } from 'react';
import { IPostModel } from "interfaces/post";
import { getDailyTopPosts } from "async_actions/post";
import { Spin } from "antd";
import classes from './DailyPostList.module.css'
import { renderPostList } from './utils';

const DailyPostList: FunctionComponent = () => {
    const [topPosts, setTopPosts] = useState<Required<IPostModel>[] | null>(null);

    useEffect(() => {
        getDailyTopPosts().then((posts) => setTopPosts(posts))
    }, []);


    return (
        <div className={classes.daily_post_list}>
            {topPosts
                ? renderPostList(topPosts)
                : <Spin size="large"/>
            }
        </div>
    );
}

export default DailyPostList;