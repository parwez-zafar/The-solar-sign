import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, {
    REGISTER_USER_REQUEST: () => {
        return {
            loading: true,
            isAuthenticated: false,
        };
    },
    REGISTER_USER_SUCCESS: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: true,
            user: action.payload,
        }
    },
    REGISTER_USER_FAIL: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload,
        }
    },
    CLEAR_ERRORS: (state) => {
        return {
            ...state,
            error: null,
        }
    },
})