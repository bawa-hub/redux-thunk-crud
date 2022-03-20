import axios from "axios";
import * as types from "./actionTypes";

const userAdded = () => ({ type: types.ADD_USER });
const getUsers = (users) => ({ type: types.GET_USERS, payload: users });
const getUser = (user) => ({ type: types.GET_SINGLE_USER, payload: user });
const userUpdated = () => ({ type: types.UPDATE_USER });
const userDeleted = () => ({ type: types.DELETE_USER });

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log("response", res);
        dispatch(getUsers(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("response", res);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((err) => console.log(err));
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((res) => {
        console.log("response", res);
        dispatch(userAdded());
      })
      .catch((err) => console.log(err));
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("response", res);
        dispatch(getUser(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const updateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((res) => {
        console.log("response", res);
        dispatch(userUpdated());
      })
      .catch((err) => console.log(err));
  };
};
