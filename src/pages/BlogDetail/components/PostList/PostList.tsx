import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "redux/reducers/rootReducer";
import { List } from "antd";
import { getPostList } from "async_actions/blog";
import PostCard from "pages/BlogDetail/components/PostList/PostCard/PostCard";
import classes from './PostList.module.css'


export interface IPostList {
    blogId: string;
}

const PostList: FunctionComponent<IPostList> = (props) => {
    const { blogId } = props;
    const dispatch = useDispatch();
    const paginatedPostList = useSelector((state: AppState) => state.blog.paginatedPostList);


    if (paginatedPostList) {
        const { current_page, total_items, page_size, results } = paginatedPostList;

        const paginationConfig = {
            current: current_page,
            pageSize: page_size,
            total: total_items,
            onChange: (page) => {
                dispatch(getPostList(blogId, page));
            }
        }


        return (
            <List itemLayout="vertical" size="large" pagination={paginationConfig} className={classes.post_list}
                  dataSource={results} renderItem={(post) => <PostCard post={post}/>}
            />
        );
    }

    return null;
}

export default PostList;