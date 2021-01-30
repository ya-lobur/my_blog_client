import React, { FunctionComponent } from 'react';
import { useRouteMatch } from "react-router";
import { RouteTemplates } from "constants/routes";
import CertainBlogInfo from './components/CertainBlogInfo/CertainBlogInfo';

const ExtraInfo: FunctionComponent = () => {

    const isCertainBlog = useRouteMatch({ path: RouteTemplates.BLOG_DETAIL, exact: true });

    if (isCertainBlog) {
        return <CertainBlogInfo/>
    }

    return null;
}

export default ExtraInfo;