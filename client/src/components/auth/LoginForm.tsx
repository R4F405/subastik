import { useLogin } from '../../hooks/auth/useLogin';
import { Button, Input } from '../shared';
import { Link, Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

export const LoginForm = () => {
  const { formData, isLoading, error, isLoggedIn, handleChange, handleSubmit } = useLogin();

  if (isLoggedIn) {
    // Redirigir al usuario a la página principal tras el login
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 bg-opacity-60 rounded-xl shadow-lg backdrop-blur-md">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1m0-11V7m-5 12v-1m0-11V7m5 12v-1m0-11V7" />
          </svg>
          <h1 className="text-3xl font-bold text-white">Iniciar Sesión en Subastik</h1>
          <p className="text-gray-400">Introduce tus credenciales para continuar.</p>
        </div>

        {error && <div className="p-3 my-2 text-sm text-white bg-red-800 bg-opacity-50 rounded-md border border-red-700">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email"
            type="email"
            placeholder="tu@email.com"
            id="email"
            value={formData.email}
            onChange={handleChange}
            variant="dark"
            required
          />
          
          <Input
            label="Contraseña"
            type="password"
            placeholder="Tu contraseña"
            id="password"
            value={formData.password}
            onChange={handleChange}
            variant="dark"
            required
          />
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isLoading}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 focus:ring-offset-gray-800 focus:ring-blue-500"
          >
            Iniciar Sesión
          </Button>
        </form>
        <p className="text-sm text-center text-gray-400">
          ¿No tienes una cuenta?{' '}
          <Link to={ROUTES.REGISTER} className="font-medium text-red-500 hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};