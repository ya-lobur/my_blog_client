import { combineReducers } from 'redux';
import blog, { IBlogReducer } from "redux/reducers/blog";
import post, { IPostReducer } from "redux/reducers/post";


export interface AppState {
    blog: IBlogReducer,
    post: IPostReducer,
}

export default combineReducers<AppState>({
    blog,
    post
});
