import { useAuthContext } from './useAuthContext';
import axios from 'axios';
import { useState } from 'react';


export const useSignup = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | { error: string }>(null)
    const { dispatch } = useAuthContext();
    const signup = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        axios.post('http://localhost:3000/api/user/signUp', { email, password })
            .then((res) => {
                console.log(res.data)
                // save the user to local storage
                localStorage.setItem('Uer', JSON.stringify(res.data));
                // update auth context 
                dispatch({ type: "LOGIN", payload: res.data })
                setLoading(false);
            }).catch((err) => {
                console.log(err.response.data)
                setLoading(false);
                setError(err.response.data);
            });
    }
    return { signup, loading, error }
};
