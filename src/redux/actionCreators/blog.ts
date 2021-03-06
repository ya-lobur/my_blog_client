import actionCreatorFactory from "typescript-fsa";
import { IPaginatedPostList } from "interfaces/post";
import { IBlogModel } from "interfaces/blog";

const prefix = 'BLOG';
const actionCreator = actionCreatorFactory();


export const setPaginatedPostList = actionCreator<IPaginatedPostList | null>(`${prefix}_SET_PAGINATED_POST_LIST`);
export const setBlogInfo = actionCreator<IBlogModel | null>(`${prefix}_SET_BLOG_INFO`);