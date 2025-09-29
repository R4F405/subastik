import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { RegisterForm } from '../../components/auth/RegisterForm';
import { vi } from 'vitest';
import { useRegister } from '../../hooks/auth/useRegister';
import { BrowserRouter } from 'react-router-dom';

// Mockeamos el hook de forma global
vi.mock('../../hooks/auth/useRegister');

// Convertimos el mock a un tipo que Vitest entiende para espiar
const mockedUseRegister = vi.mocked(useRegister);

// Definir un wrapper para el Router
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('RegisterForm', () => {
  // Creamos la función mock una sola vez aquí
  const handleSubmitMock = vi.fn((e) => e.preventDefault());

  beforeEach(() => {
    // Limpiamos el historial de llamadas antes de cada test
    handleSubmitMock.mockClear();

    // Proporcionamos el valor del mock antes de cada renderizado.
    // SIEMPRE usará la misma instancia de handleSubmitMock.
    mockedUseRegister.mockReturnValue({
      formData: { name: '', email: '', password: '', confirmPassword: '' },
      isLoading: false,
      error: null,
      success: null,
      handleChange: vi.fn(),
      handleSubmit: handleSubmitMock, // Usamos la función mock creada fuera
    });
  });

  it('1. Renderizado de Componentes: debería renderizar todos los campos y el botón', () => {
    // Usar el Wrapper para proporcionar el contexto de enrutamiento
    render(<RegisterForm />, { wrapper: Wrapper }); 

    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Contraseña$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirmar Contraseña/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Registrarme/i })).toBeInTheDocument();
  });

});