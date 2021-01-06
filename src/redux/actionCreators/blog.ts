import actionCreatorFactory from "typescript-fsa";

const prefix = 'BLOG';
const actionCreator = actionCreatorFactory();


export const setPostList = actionCreator<any>(`${prefix}_SET_POST_LIST`);