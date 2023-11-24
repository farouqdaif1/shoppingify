import { FC, useReducer, ReactNode, useEffect } from "react";
import { authReducer, AuthContext } from "./AuthReducer";

interface ParentCompProps {
  children?: ReactNode;
}

export const AuthContextProvider: FC<ParentCompProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  console.log("AuthContext state:", state);
  useEffect(() => {
    const user = localStorage.getItem("User");
    if (user) {
      dispatch({
        type: "LOGIN",
        payload: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
