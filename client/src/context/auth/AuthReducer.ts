import { createContext, Dispatch } from "react";
interface User {
    email: string;
    token: string;
}
interface State {
    user: null | User;
}
interface Action {
    type: string;
    payload: User;
}
export const AuthContext = createContext<{ state: State; dispatch: Dispatch<Action> } | null>(null);

export const authReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload };
        case "LOGOUT":
            return { user: null };
        default:
            return state;
    }
};
