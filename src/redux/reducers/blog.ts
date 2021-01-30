import { reducerWithInitialState } from "typescript-fsa-reducers";
import { setBlogInfo, setPaginatedPostList } from "redux/actionCreators/blog";
import { IPaginatedPostList } from "interfaces/post";
import { IBlogModel } from "interfaces/blog";

export interface IBlogReducer {
    paginatedPostList?: IPaginatedPostList;
    blogInfo?: IBlogModel;
}

const INITIAL_STATE: IBlogReducer = {};

export  default reducerWithInitialState(INITIAL_STATE)
    .case(setPaginatedPostList, (state, paginatedPostList) => ({ ...state, paginatedPostList }))
    .case(setBlogInfo, (state, blogInfo) => ({ ...state, blogInfo }))
