import { reducerWithInitialState } from "typescript-fsa-reducers";
import { setPostList } from "redux/actionCreators/blog";

export interface IBlogReducer {
    posts: any;
}

const INITIAL_STATE: IBlogReducer = {
    posts: [],
};

export  default reducerWithInitialState(INITIAL_STATE)
    .case(setPostList, (state, posts) => ({ ...state, posts }))
