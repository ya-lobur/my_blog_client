import actionCreatorFactory from "typescript-fsa";
import { IPaginatedPostList } from "interfaces/post";

const prefix = 'BLOG';
const actionCreator = actionCreatorFactory();


export const setPaginatedPostList = actionCreator<IPaginatedPostList>(`${prefix}_SET_PAGINATED_POST_LIST`);