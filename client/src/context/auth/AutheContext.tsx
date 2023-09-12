import { FC, useReducer, ReactNode } from "react";
import { authReducer, AuthContext } from "./AuthReducer";

interface ParentCompProps {
  children?: ReactNode;
}

export const AuthContextProvider: FC<ParentCompProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {user: null,});

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
