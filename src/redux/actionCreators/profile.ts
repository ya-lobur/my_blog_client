import actionCreatorFactory from "typescript-fsa";
import { IProfile } from "interfaces/profile";

const prefix = 'PROFILE';
const actionCreator = actionCreatorFactory();


export const setProfile = actionCreator<IProfile>(`${prefix}_SET_PROFILE`);