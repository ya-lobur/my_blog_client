import React, { FunctionComponent, useEffect } from 'react';
import classes from './BlogDetail.module.css'
import { useDispatch } from "react-redux";
import { getPostList } from "async_actions/blog";
import { useParams } from "react-router";

const BlogDetail: FunctionComponent = () => {

    const dispatch = useDispatch()
    const { blogId } = useParams<{ blogId: string }>()

    useEffect(() => {
        dispatch(getPostList(blogId))
    }, [blogId]);


    return (
        <p className={classes.blog_detail}>Blog Detail</p>
    );
}

export default BlogDetail;