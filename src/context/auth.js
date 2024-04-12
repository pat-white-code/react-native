import React, { useReducer, createContext } from "react";
const USER_LOGIN = "USER_LOGIN";
const USER_LOGOUT = "USER_LOGOUT";
import { getToken, storeToken, removeToken } from "../util/auth";
import { jwtDecode } from "jwt-decode";

const intitialState = {
    user: null
};

const currentToken = getToken().then((token) => {
    if (token) {
        const decodedToken = jwtDecode(currentToken);
        if (isTokenExpired(decodedToken)) {
            removeToken();
        } else {
            intitialState.user = decodedToken;
        }
    }
});

export const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {}
});

const authReducer = (state, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload
            };
        case USER_LOGOUT:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
};

export const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, { user: null });
    const login = (userData) => {
        storeToken(userData.token);
        dispatch({
            type: USER_LOGIN,
            payload: userData
        });
    };
    const logout = () => {
        dispatch({
            type: USER_LOGOUT
        });
    };

    const value = {
        user: state.user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value} {...props}>
            {props.children}
        </AuthContext.Provider>
    );
};
