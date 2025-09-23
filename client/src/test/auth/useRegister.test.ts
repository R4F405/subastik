import { renderHook, act } from '@testing-library/react';
import { useRegister } from '../../hooks/auth/useRegister'; 
import * as authApi from '../../api/auth/authApi';
import { vi } from 'vitest';
import axios from 'axios';

vi.mock('axios');
vi.mock('../../api/authApi');

describe('useRegister Hook', () => {
  const mockRegisterUser = vi.spyOn(authApi, 'registerUser');

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    // CORRECCIÓN: Mockeamos el valor por defecto de isAxiosError aquí
    // para que no interfiera entre tests.
    vi.mocked(axios.isAxiosError).mockReturnValue(false); 
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  
  it('4. Lógica de Hooks: debería manejar el estado de carga (isLoading) correctamente', async () => {
    mockRegisterUser.mockImplementation(() => new Promise(resolve => setTimeout(() => resolve({ id: '1', email: 'test@test.com', name: 'Test User', createdAt: '', updatedAt: '' }), 100)));

    const { result } = renderHook(() => useRegister());
    const event = { preventDefault: vi.fn() } as unknown as React.FormEvent;

    let submitPromise;
    act(() => {
      submitPromise = result.current.handleSubmit(event);
    });

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      vi.runAllTimers();
      await submitPromise;
    });

    expect(result.current.isLoading).toBe(false);
  });

  it('4. Lógica de Hooks: debería manejar una respuesta de éxito de la API', async () => {
    const mockUser = { id: '1', email: 'test@test.com', name: 'Test User', createdAt: 'date', updatedAt: 'date' };
    mockRegisterUser.mockResolvedValue(mockUser);

    const { result } = renderHook(() => useRegister());
    const event = { preventDefault: vi.fn() } as unknown as React.FormEvent;
    
    act(() => {
      result.current.handleChange({ target: { name: 'name', value: 'Test User' } } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({ target: { name: 'email', value: 'test@test.com' } } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({ target: { name: 'password', value: 'password123' } } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({ target: { name: 'confirmPassword', value: 'password123' } } as React.ChangeEvent<HTMLInputElement>);
    });

    await act(async () => {
      await result.current.handleSubmit(event);
    });

    expect(result.current.success).toBe('¡Registro completado con éxito! Ahora puedes iniciar sesión.');
    expect(result.current.error).toBeNull();
  });

  it('4. Lógica de Hooks: debería manejar una respuesta de error de la API', async () => {
    const errorResponse = { response: { data: { message: 'El email ya está en uso' } } };
    vi.mocked(axios.isAxiosError).mockReturnValue(true);
    mockRegisterUser.mockRejectedValue(errorResponse);

    const { result } = renderHook(() => useRegister());
    const event = { preventDefault: vi.fn() } as unknown as React.FormEvent;
    
    await act(async () => {
      await result.current.handleSubmit(event);
    });

    expect(result.current.error).toBe('El email ya está en uso');
    expect(result.current.success).toBeNull();
  });
});