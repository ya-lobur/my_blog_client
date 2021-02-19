import actionCreatorFactory from "typescript-fsa";
import { IProfile } from "interfaces/profile";

const prefix = 'PROFILE';
const actionCreator = actionCreatorFactory();


export const setProfileData = actionCreator<IProfile | null>(`${prefix}_SET_PROFILE`);