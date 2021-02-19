import { reducerWithInitialState } from "typescript-fsa-reducers";
import { IProfile } from "interfaces/profile";
import { setProfileData } from "redux/actionCreators/profile";

export interface IProfileReducer {
    profileData: IProfile | null;
    loggedIn: boolean;
}

const INITIAL_STATE: IProfileReducer = {
    profileData: null,
    loggedIn: false,
}

export default reducerWithInitialState(INITIAL_STATE)
    .case(setProfileData, (state, profileData) => (
        { ...state, profileData: profileData, loggedIn: Boolean(profileData) }
    ))