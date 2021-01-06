import { combineReducers } from 'redux';
import blog, { IBlog } from "redux/reducers/blog";


export interface AppState {
    blog: IBlog
}

export default combineReducers<AppState>({
    blog
});
