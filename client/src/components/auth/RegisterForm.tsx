// client/src/components/auth/RegisterForm.tsx

import { useRegister } from '../../hooks/auth/useRegister';
import { Button, Input } from '../shared';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

export const RegisterForm = () => {
  const { formData, isLoading, error, success, handleChange, handleSubmit } = useRegister();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v-1m0 0c-1.11 0-2.08-.402-2.599-1M9.401 9a3.001 3.001 0 00-2.599-1M14.599 9a3.001 3.001 0 012.599-1m0 0V7m-5.198 12v-1" />
          </svg>
          <h1 className="text-3xl font-bold text-gray-900">Crea tu Cuenta en Subastik</h1>
          <p className="text-gray-600">Únete a la emoción de las subastas en tiempo real.</p>
        </div>

        {error && <div className="p-3 my-2 text-sm text-red-800 bg-red-100 rounded-md border border-red-300">{error}</div>}
        {success && <div className="p-3 my-2 text-sm text-green-800 bg-green-100 rounded-md border border-green-300">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Nombre"
            type="text"
            placeholder="Tu nombre público"
            id="name"
            value={formData.name}
            onChange={handleChange}
            variant="light"
            required
          />
          
          <Input
            label="Email"
            type="email"
            placeholder="tu@email.com"
            id="email"
            value={formData.email}
            onChange={handleChange}
            variant="light"
            required
          />
          
          <Input
            label="Contraseña"
            type="password"
            placeholder="Mínimo 8 caracteres"
            id="password"
            value={formData.password}
            onChange={handleChange}
            variant="light"
            required
          />
          
          <Input
            label="Confirmar Contraseña"
            type="password"
            placeholder="Repite la contraseña"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            variant="light"
            required
          />
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isLoading}
            className="w-full mt-4"
          >
            Registrarme
          </Button>
        </form>
        <p className="text-sm text-center text-gray-600">
          ¿Ya tienes una cuenta?{' '}
          <Link to={ROUTES.LOGIN} className="font-medium text-blue-600 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};