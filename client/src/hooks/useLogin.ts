import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useState } from 'react';

export const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | { error: string }>(null)
    const { dispatch } = useAuthContext();
    const login = (email: string, password: string) => {
        setLoading(true);
        setError(null);
        axios.post('http://localhost:3000/api/user/signIn', { email, password }).then((res) => {
            localStorage.setItem("User", JSON.stringify(res.data));
            dispatch({ type: "LOGIN", payload: res.data })
            setLoading(false);
        }).catch((err) => {
            console.log(err)
            setLoading(false);
            setError(err.response.data);
        });
    }
    return { login, loading, error }
}
