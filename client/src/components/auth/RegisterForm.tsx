import { useRegister } from '../../hooks/useRegister';

export const RegisterForm = () => {
  const { formData, isLoading, error, success, handleChange, handleSubmit } = useRegister();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 bg-opacity-60 rounded-xl shadow-lg backdrop-blur-md">
        <div className="text-center">
          {/* Aqui ira el logo de Subastik, de momento esta este icono de prueba */}
          <svg className="w-16 h-16 mx-auto mb-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v-1m0 0c-1.11 0-2.08-.402-2.599-1M9.401 9a3.001 3.001 0 00-2.599-1M14.599 9a3.001 3.001 0 012.599-1m0 0V7m-5.198 12v-1" />
          </svg>
          <h1 className="text-3xl font-bold text-white">Crea tu Cuenta en Subastik</h1>
          <p className="text-gray-400">Únete a la emoción de las subastas en tiempo real.</p>
        </div>

        {error && <div className="p-3 my-2 text-sm text-white bg-red-800 bg-opacity-50 rounded-md border border-red-700">{error}</div>}
        {success && <div className="p-3 my-2 text-sm text-white bg-green-800 bg-opacity-50 rounded-md border border-green-700">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-bold text-gray-400" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre público"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 text-gray-200 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-400" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="tu@email.com"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 text-gray-200 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-400" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Mínimo 8 caracteres"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 text-gray-200 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-400" htmlFor="confirmPassword">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              placeholder="Repite la contraseña"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 text-gray-200 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 mt-4 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-red-500 transition-all duration-200 disabled:bg-red-800 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Registrando...' : 'Registrarme'}
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-400">
          ¿Ya tienes una cuenta?{' '}
          <a href="/login" className="font-medium text-red-500 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};