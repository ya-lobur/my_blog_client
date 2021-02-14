import { ComponentType } from 'react';
import IndexPage from "pages/IndexPage/IndexPage";
import PostDetail from "pages/post/PostDetail/PostDetail";
import PostWizard from "pages/post/wizard/PostWizard/PostWizard";
import BlogDetail from "pages/BlogDetail/BlogDetail";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

export enum RouteTemplates {
    ROOT = '/',
    NOT_FOUND = '/404/',
    BLOG_DETAIL = '/blog/:blogId/',
    POST_DETAIL = '/post/:postId/',
    POST_CREATE = '/post-wizard/',
    POST_EDIT = '/post-wizard/:postId'
}

interface IAppRoute {
    path: RouteTemplates | RouteTemplates[];
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
    {
        path: RouteTemplates.BLOG_DETAIL,
        component: BlogDetail
    },
    {
        path: [RouteTemplates.POST_CREATE, RouteTemplates.POST_EDIT],
        component: PostWizard
    },
    {
        path: RouteTemplates.NOT_FOUND,
        component: NotFoundPage
    },
]

export default routes