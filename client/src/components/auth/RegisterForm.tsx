import { useRegister } from '../../hooks/auth/useRegister';
import { Button, Input } from '../shared';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { useTranslation } from 'react-i18next';

export const RegisterForm = () => {

  const { t } = useTranslation('auth'); 
  const { formData, isLoading, error, success, handleChange, handleSubmit } = useRegister(t);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">{t('register.title')}</h1>
          <p className="text-gray-600">{t('register.subtitle')}</p>
        </div>

        {error && <div className="p-3 my-2 text-sm text-red-800 bg-red-100 rounded-md border border-red-300">{error}</div>}
        {success && <div className="p-3 my-2 text-sm text-green-800 bg-green-100 rounded-md border border-green-300">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label={t('register.nameLabel')}
            type="text"
            placeholder={t('register.namePlaceholder')}
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
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
            label={t('register.passwordLabel')}
            type="password"
            placeholder={t('register.passwordPlaceholder')}
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <Input
            label={t('register.confirmPasswordLabel')}
            type="password"
            placeholder={t('register.confirmPasswordPlaceholder')}
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          
          <Button
            type="submit"
            isLoading={isLoading}
            className="w-full mt-4"
            size="lg"
            variant="primary">
            {t('register.submitButton')}
          </Button>
        </form>
        <p className="text-sm text-center text-gray-600">
          {t('register.hasAccount')}{' '}
          <Link to={ROUTES.LOGIN} className="font-medium text-blue-600 hover:underline">
            {t('register.loginLink')}
          </Link>
        </p>
      </div>
    </div>
  );
};