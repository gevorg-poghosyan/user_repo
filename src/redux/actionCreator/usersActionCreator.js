import { USERS_ACTION_TYPES } from "../actions/usersActions.js";

export function getUsersRequest(searchedUsers, page) {
    console.log(searchedUsers,"searchedUsers");
  return { type: USERS_ACTION_TYPES.USERS_GET_REQUEST, payload: { searchedUsers, page } };
}

export function getUsersRequestSucceed(users) {
  return { type: USERS_ACTION_TYPES.USERS_GET_REQUEST_SUCCESS, payload: { users } };
}

export function getSinglUsersRequest(login) {
  return {
    type: USERS_ACTION_TYPES.USERS_GET_SINGLE_REQUEST,
    payload: { login }
  };
}

export function getSinglUsersRequestSucceed(user) {
  return { type: USERS_ACTION_TYPES.USERS_GET_SINGLE_REQUEST_SUCCESS, payload: { user } };
}

export function loading(isLoading) {
    return { type: USERS_ACTION_TYPES.LOADING, payload: { isLoading } };
  }
