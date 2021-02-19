import { combineReducers } from 'redux';
import blog, { IBlogReducer } from "redux/reducers/blog";
import post, { IPostReducer } from "redux/reducers/post";
import profile, { IProfileReducer } from "redux/reducers/profile";


export interface AppState {
    blog: IBlogReducer,
    post: IPostReducer,
    profile: IProfileReducer
}

export default combineReducers<AppState>({
    blog,
    post,
    profile
});
