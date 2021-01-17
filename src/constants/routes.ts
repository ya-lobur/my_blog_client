import { ComponentType } from 'react';
import IndexPage from "pages/IndexPage/IndexPage";
import PostDetail from "pages/post/PostDetail/PostDetail";

export enum RouteTemplates {
    ROOT = '/',
    BLOG = '/blog',
    POST_DETAIL = '/post/:id'
}

interface IAppRoute {
    path: string;
    component: ComponentType;
    pageLayout?: ComponentType;
}

const routes: IAppRoute[] = [
    {
        path: RouteTemplates.ROOT,
        component: IndexPage
    },
    {
        path: RouteTemplates.POST_DETAIL,
        component: PostDetail
    },
]

export default routes