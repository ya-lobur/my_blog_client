import { reducerWithInitialState } from "typescript-fsa-reducers";
import { IPostModel } from "interfaces/post";
import { setCurrentPost } from "redux/actionCreators/post";

export interface IPostReducer {
    currentPost?: Required<IPostModel>;
}

const INITIAL_STATE: IPostReducer = {};

export default reducerWithInitialState(INITIAL_STATE)
    .case(setCurrentPost, (state, post) => ({ ...state, currentPost: post }))
