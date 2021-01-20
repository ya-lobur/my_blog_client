import actionCreatorFactory from "typescript-fsa";
import { IPostModel } from "interfaces/post";

const prefix = 'POST';
const actionCreator = actionCreatorFactory();


export const setCurrentPost = actionCreator<IPostModel>(`${prefix}_SET_CURRENT_POST`);