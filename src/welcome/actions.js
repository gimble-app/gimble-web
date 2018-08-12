import {SubmissionError} from "redux-form";
import {REGISTER_PROFILE_NAME} from "../clients/remoteFunctions";
import {sendNotification} from "../notifications/actions";

export const UPDATE_PROFILE_SUCCESS = 'profile updated';

export const setProfileName = ({profileName}) =>
  async (dispatch, getState, { getRemoteFunction }) => {
    try {
      const registerProfileName = getRemoteFunction(REGISTER_PROFILE_NAME);
      await registerProfileName({profileName});

      dispatch(sendNotification(UPDATE_PROFILE_SUCCESS));
    } catch (error) {
      switch(error.code) {
        case 'invalid-argument': {
          throw new SubmissionError({
            profileName: error.message,
          })
        }
        case 'already-exists': {
          throw new SubmissionError({
            profileName: error.message,
          })
        }
        default: throw error;
      }
    }
  };
