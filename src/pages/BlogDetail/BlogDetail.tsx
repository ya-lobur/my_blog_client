import React, { FunctionComponent, useEffect } from 'react';
import classes from './BlogDetail.module.css'
import { useDispatch } from "react-redux";
import { getPostList } from "async_actions/blog";
import { useParams } from "react-router";
import { setPaginatedPostList } from "redux/actionCreators/blog";
import PostList from "pages/BlogDetail/components/PostList/PostList";

const BlogDetail: FunctionComponent = () => {

    const dispatch = useDispatch()
    const { blogId } = useParams<{ blogId: string }>();

    useEffect(() => {
        dispatch(getPostList(blogId))

        return () => {
            dispatch(setPaginatedPostList(null))
        }

    }, [blogId]);


    return (
        <PostList blogId={blogId} />
    );
}

export default BlogDetail;