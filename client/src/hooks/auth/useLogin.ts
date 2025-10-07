import { useState, useEffect, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { loginUser } from '../../api/auth/authApi';
import type { LoginData } from '../../types/auth/auth';
import { useAuth } from '../../context';
import axios from 'axios';

export const useLogin = () => {
    const { login } = useAuth();
    const { t } = useTranslation('auth');

    const [formData, setFormData] = useState<LoginData>({
        email: '',
        password: '',
    });

    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (!error) return;

        const timer = setTimeout(() => {
            setError(null);
        }, 5000);

        return () => clearTimeout(timer);
    }, [error]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        setIsLoading(true);
        setError(null);

        try {
            const response = await loginUser(formData);
      
            login(response.access_token, response.user);
            setIsLoggedIn(true);
            setFormData({ email: '', password: '' });
        } catch (err: unknown) {
            if (axios.isAxiosError(err) && err.response) {
                const errorKey = Array.isArray(err.response.data.message)
                    ? err.response.data.message[0]
                    : err.response.data.message;
                
                setError(t(`${errorKey}`));
            } else {
                setError(t('apiError.NETWORK_ERROR'));
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        isLoading,
        error,
        isLoggedIn,
        handleChange,
        handleSubmit,
    };
};