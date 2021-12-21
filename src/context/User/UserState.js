import React, { useReducer } from "react";

import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axiosClient from "./../../config/axios";

const UserState = (props) => {
  // 1. Initial State
  const initialState = {
    currentUser: {
      firstName: "",
      lastName: "",
      country: "",
      email: "",
      password: "",
      imgUrl: "",
      wishList: [],
    },
    authStatus: false,
    msg: "",
  };

  // 2. Configuración del reducer.
  const [globalState, dispatch] = useReducer(UserReducer, initialState);

  // 3. Funciones
  const registerUser = async (form) => {
    const res = await axiosClient.post("users/create", form);

    console.log(res);

    const token = res.data.data;
    const msg = res.data.msg
    if(msg) {
      dispatch({
        type: "REGISTER_ERROR",
        payload: msg,
      })
    } else {
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: token,

      })
    }
  };

  const loginUser = async (form) => {
    const res = await axiosClient.post("users/login", form);

    const token = res.data.data;

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: token,
    });
  };

  const verifyingToken = async () => {
    const token = localStorage.getItem("token");

    // anexar token a la siguiente petición de axios
    if (token) {
      axiosClient.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete axiosClient.defaults.headers.common["x-auth-token"];
    }

    try {
      const res = await axiosClient.get("users/verifytoken");

      const userData = res.data.data;

      dispatch({
        type: "GET_DATA_USER",
        payload: userData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = async () => {
    dispatch({
      type: "LOGOUT_USER"
    })
  }

  const updateUser = async (form, idUser) => {
    const res = axiosClient.put(`users/edit/${idUser}`, form)
    const updatedUser = (await res).data.data

    dispatch({
      type: "UPDATE_USER",
      payload: updatedUser
    })
  }

  // 4. Retorno.
  return (
    <UserContext.Provider
      value={{
        currentUser: globalState.currentUser,
        authStatus: globalState.authStatus,
        msg: globalState.msg,
        registerUser,
        loginUser,
        verifyingToken,
        logoutUser,
        updateUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
