import { reducerWithInitialState } from "typescript-fsa-reducers";
import { setPostList } from "redux/actionCreators/blog";

export interface IBlog {
    posts: any;
}

const INITIAL_STATE: IBlog = {
    posts: [],
};

export  default reducerWithInitialState(INITIAL_STATE)
    .case(setPostList, (state, posts) => ({ ...state, posts }))