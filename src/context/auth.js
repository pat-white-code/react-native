import React, { useReducer, createContext } from "react";
const USER_LOGIN = 'USER_LOGIN'
const USER_LOGOUT = 'USER_LOGOUT'

export const AuthContext = createContext({
    user: null,
    login: userData => {},
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
    const login = userData => {
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
