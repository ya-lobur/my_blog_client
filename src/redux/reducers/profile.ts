import { reducerWithInitialState } from "typescript-fsa-reducers";
import { IProfile } from "interfaces/profile";
import { setProfile } from "redux/actionCreators/profile";

export interface IProfileReducer {
    profileData: IProfile | null;
}

const INITIAL_STATE: IProfileReducer = {
    profileData: null
}

export default reducerWithInitialState(INITIAL_STATE)
    .case(setProfile, (state, profile) => ({ ...state, profileData: profile }))