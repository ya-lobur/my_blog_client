import { ComponentType } from 'react';
import IndexPage from "pages/IndexPage/IndexPage";

export enum RouteTemplates {
    ROOT = '/',
    BLOG = '/blog',
    BLOG_DETAIL = '/blog/:id'
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
]

export default routes