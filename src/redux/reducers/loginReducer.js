import {
    FETCHING_LOGIN_DATA,
    FETCHING_LOGIN_SUCCESS,
    FETCHING_LOGIN_FAILURE
  } from '../constants'

  const initialState = {
    data: undefined,
    isFetching: false,
    error: false,
  }
  
  export default function loginReducer(state = initialState, action) {
    switch (action.type) {
      case FETCHING_LOGIN_DATA:
        return {
          ...state,
          data: undefined,
          isFetching: true,
        }
        case FETCHING_LOGIN_SUCCESS:
            return {
              ...state,
              isFetching: false,
              data: action.data,
            };
      case FETCHING_LOGIN_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      default:
        return state;
    }
  }