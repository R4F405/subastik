import { useLogin } from '../../hooks/auth/useLogin';
import { Button, Input } from '../shared';
import { Link, Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { useTranslation } from 'react-i18next';

export const LoginForm = () => {
  const { t } = useTranslation('auth');
  const { formData, isLoading, error, isLoggedIn, handleChange, handleSubmit } = useLogin();

  if (isLoggedIn) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">{t('login.title')}</h1>
          <p className="text-gray-600">{t('login.subtitle')}</p>
        </div>

        {error && <div className="p-3 my-2 text-sm text-red-800 bg-red-100 rounded-md border border-red-300">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label={t('login.emailLabel')}
            type="email"
            placeholder={t('login.emailPlaceholder')}
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <Input
            label={t('login.passwordLabel')}
            type="password"
            placeholder={t('login.passwordPlaceholder')}
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <Button
            type="submit"
            isLoading={isLoading}
            className="w-full mt-4"
            size="lg"
            variant="primary">
            {t('login.submitButton')}
          </Button>
        </form>
        <p className="text-sm text-center text-gray-600">
          {t('login.noAccount')}{' '}
          <Link to={ROUTES.REGISTER} className="font-medium text-blue-600 hover:underline">
            {t('login.registerLink')}
          </Link>
        </p>
      </div>
    </div>
  );
};