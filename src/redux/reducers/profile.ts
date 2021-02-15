import { reducerWithInitialState } from "typescript-fsa-reducers";
import { IProfile } from "interfaces/profile";
import { setProfileData } from "redux/actionCreators/profile";

export interface IProfileReducer {
    profileData: IProfile | null;
}

const INITIAL_STATE: IProfileReducer = {
    profileData: null
}

export default reducerWithInitialState(INITIAL_STATE)
    .case(setProfileData, (state, profile) => ({ ...state, profileData: profile }))