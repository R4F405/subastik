import { useState, useEffect, type FormEvent } from 'react';
import { registerUser } from '../../api/auth/authApi';
import type{ RegisterData } from '../../types/auth/auth';
// import { useAuth } from '../../context'; // Listo para implementar login automático
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import type { TFunction } from 'i18next';

// Extendemos el tipo localmente para incluir el campo de confirmación de contraseña
type RegisterFormData = RegisterData & { confirmPassword: string };

export const useRegister = (t: TFunction<'auth'>) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<RegisterFormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (error) {
            const errorTimer = setTimeout(() => {
                setError(null);
            }, 5000);
            return () => clearTimeout(errorTimer);
        }
    }, [error]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError(t('register.error.passwordsDoNotMatch'));
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const { name, email, password } = formData;
            await registerUser({ name, email, password });
            
            navigate(ROUTES.LOGIN);
            
        } catch (err: unknown) {
            if (axios.isAxiosError(err) && err.response?.data?.message) {
                const errorKey = Array.isArray(err.response.data.message)
                    ? err.response.data.message[0]
                    : err.response.data.message;
                setError(t(`apiError.${errorKey}`));
            } else {
                setError('No se pudo conectar con el servidor.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        isLoading,
        error,
        handleChange,
        handleSubmit,
    };
};