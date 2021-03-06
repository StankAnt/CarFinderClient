import {
  CHANGE_USER_AVATAR,
  CHANGE_USER_DATA,
  CHANGE_USER_DATA_SUCCESS,
  CHANGE_USER_SETTINGS,
  SET_LANGUAGE,
  USER_CHANGE_PASSWORD,
  USER_CONFIRM_EMAIL,
  USER_CONFIRM_EMAIL_SUCCESS,
  USER_LOGGED_OUT,
  USER_SIGN_IN,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_UP,
  USER_SIGN_UP_SUCCESS
} from '../actions/actionTypes';
import { UserAction } from '../actions/userActions';
import { InitialState, User } from '../models/userModel';

export default function userReducer(state: InitialState = {}, action: UserAction): InitialState {
  switch (action.type) {
    case USER_SIGN_IN_SUCCESS:
      return action.payload;
    case USER_LOGGED_OUT:
      return {};
    case USER_SIGN_IN:
      return state;
    case USER_SIGN_UP:
      return state;
    case USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        signedup: true
      };
    case USER_CONFIRM_EMAIL:
      return state;
    case USER_CONFIRM_EMAIL_SUCCESS:
      return state;
    case USER_CHANGE_PASSWORD:
      return state;
    case SET_LANGUAGE:
      return {
        ...state,
        interfaceLanguage: action.payload
      };
    case CHANGE_USER_DATA_SUCCESS:
      return action.payload;
    case CHANGE_USER_AVATAR:
      return state;
    case CHANGE_USER_SETTINGS:
      return state;
    default:
      return state;
  }
}
