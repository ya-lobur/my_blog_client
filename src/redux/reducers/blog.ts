import { reducerWithInitialState } from "typescript-fsa-reducers";
import { setPaginatedPostList } from "redux/actionCreators/blog";
import { IPaginatedPostList } from "interfaces/post";

export interface IBlogReducer {
    paginatedPostList?: IPaginatedPostList;
}

const INITIAL_STATE: IBlogReducer = {};

export  default reducerWithInitialState(INITIAL_STATE)
    .case(setPaginatedPostList, (state, paginatedPostList) => ({ ...state, paginatedPostList }))
