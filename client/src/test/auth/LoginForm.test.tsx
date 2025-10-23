import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from '../../components/auth/LoginForm';
import { useLogin } from '../../hooks/auth/useLogin';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom'; 

// Mock del hook useLogin
vi.mock('../../hooks/auth/useLogin');
const mockedUseLogin = vi.mocked(useLogin);

// Mocks de funciones y estados
const mockHandleSubmit = vi.fn((e) => e.preventDefault());
const mockHandleChange = vi.fn();

// Componente Wrapper para simular el enrutamiento
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('LoginForm', () => {
  const defaultHookValue = {
    formData: { email: '', password: '' },
    isLoading: false,
    error: null,
    isLoggedIn: false,
    handleChange: mockHandleChange,
    handleSubmit: mockHandleSubmit,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockedUseLogin.mockReturnValue(defaultHookValue);
  });

  it('1. Renderizado: debería renderizar los campos de email, contraseña y el botón de inicio de sesión', () => {
    render(<LoginForm />, { wrapper: Wrapper });

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Iniciar Sesión/i })).toBeInTheDocument(); // Cambiado para que falle
  });
  
  it('2. Interacción: debería llamar a handleSubmit al enviar el formulario', () => {
    const { container } = render(<LoginForm />, { wrapper: Wrapper });
    const form = container.querySelector('form'); 
    expect(form).toBeInTheDocument();
    if(form) {
      fireEvent.submit(form); 
    }
    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
  });

  it('3. Feedback: debería mostrar un mensaje de error si existe', () => {
    const testError = 'Credenciales no válidas';
    mockedUseLogin.mockReturnValue({ ...defaultHookValue, error: testError });
    
    render(<LoginForm />, { wrapper: Wrapper });
    
    expect(screen.getByText(testError)).toBeInTheDocument();
  });
  
  it('4. Estado de carga: el botón debería mostrar "Cargando..." si isLoading es true', () => {
    mockedUseLogin.mockReturnValue({ ...defaultHookValue, isLoading: true });

    render(<LoginForm />, { wrapper: Wrapper });
    
    // El texto ahora viene de i18next
    const loadingButton = screen.getByRole('button', { name: /Cargando.../i });
    expect(loadingButton).toBeInTheDocument();
    expect(loadingButton).toBeDisabled();
  });
});