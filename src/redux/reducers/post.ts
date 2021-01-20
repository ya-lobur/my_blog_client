import { reducerWithInitialState } from "typescript-fsa-reducers";
import { IPostModel } from "interfaces/post";
import { setCurrentPost } from "redux/actionCreators/post";

export interface IPost {
    currentPost?: IPostModel;
}

const INITIAL_STATE: IPost = {};

export default reducerWithInitialState(INITIAL_STATE)
    .case(setCurrentPost, (state, post) => ({ ...state, currentPost: post }))
