import { useAuthContext } from './useAuthContext';
import axios from 'axios';
import { useState } from 'react';


export const useSignup = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null)
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
                setLoading(false);
                setError(err);
            });
    }
    return { signup, loading, error }
};
