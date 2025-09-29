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

const REDIRECT_DELAY_MS = 3000; // 3 segundos antes de la redirección

export const useRegister = (t: TFunction<'auth'>) => {
    // const { login } = useAuth(); 
    const navigate = useNavigate(); // Inicializar useNavigate

    // Estado para manejar los campos del formulario
    const [formData, setFormData] = useState<RegisterFormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    // Estado para el feedback al usuario
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (success) {
            // Si el registro es exitoso, esperamos 3 segundos y redirigimos
            const redirectTimer = setTimeout(() => {
                setSuccess(null); // Limpiar mensaje de éxito
                navigate(ROUTES.LOGIN); // Redirigir al login
            }, REDIRECT_DELAY_MS);

            return () => clearTimeout(redirectTimer);
        }

        // Si solo hay error, el temporizador de 5 segundos sigue funcionando
        if (error) {
            const errorTimer = setTimeout(() => {
                setError(null);
            }, 5000);

            return () => clearTimeout(errorTimer);
        }
    }, [success, error, navigate]); // Añadir navigate a las dependencias

    // Manejador para actualizar el estado cuando el usuario escribe
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    // Lógica para manejar el envío del formulario
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError(t('register.error.passwordsDoNotMatch'));
            return; // Detenemos el envío si no coinciden
        }

        setIsLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const { name, email, password } = formData;
            await registerUser({ name, email, password });
      
            setSuccess(t('register.successMessage'));
            
        } catch (err: unknown) {
            if (axios.isAxiosError(err) && err.response) {
              const errorKey = err.response.data.message;
              setError(t(`apiError.${errorKey}`));
            } else {
                setError('No se pudo conectar con el servidor.');
            }
        } finally {
        setIsLoading(false);
        }
    };

    // El hook devuelve el estado y las funciones que el componente necesita
    return {
        formData,
        isLoading,
        error,
        success,
        handleChange,
        handleSubmit,
    };
};