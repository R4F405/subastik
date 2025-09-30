import { renderHook, act } from '@testing-library/react';
import { useRegister } from '../../hooks/auth/useRegister';
import * as authApi from '../../api/auth/authApi';
import { vi } from 'vitest';
import axios from 'axios';
import { ROUTES } from '../../constants';
import type { TFunction } from 'i18next';

vi.mock('axios');
vi.mock('../../api/auth/authApi');

// Mockear useNavigate de react-router-dom
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal() as object;
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockT: TFunction<'auth'> = (key: string | string[]) => key as string;

describe('useRegister Hook', () => {
  const mockRegisterUser = vi.spyOn(authApi, 'registerUser');

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    vi.mocked(axios.isAxiosError).mockReturnValue(false);
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  
  it('4. Lógica de Hooks: debería manejar el estado de carga (isLoading) correctamente', async () => {
    mockRegisterUser.mockImplementation(() => new Promise(resolve => setTimeout(() => resolve({ id: '1', email: 'test@test.com', name: 'Test User', createdAt: '', updatedAt: '' }), 100)));

    // ¡Pasa el mock de `t` al hook!
    const { result } = renderHook(() => useRegister(mockT));
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

  it('4. Lógica de Hooks: debería redirigir al login inmediatamente después de un registro exitoso', async () => {
    const mockUser = { id: '1', email: 'test@test.com', name: 'Test User', createdAt: 'date', updatedAt: 'date' };
    mockRegisterUser.mockResolvedValue(mockUser);
    
    const { result } = renderHook(() => useRegister(mockT));
    const event = { preventDefault: vi.fn() } as unknown as React.FormEvent;

    act(() => {
      // Simular entrada de datos válidos
      result.current.handleChange({ target: { id: 'name', value: 'Test User' } } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({ target: { id: 'email', value: 'test@test.com' } } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({ target: { id: 'password', value: 'password123' } } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({ target: { id: 'confirmPassword', value: 'password123' } } as React.ChangeEvent<HTMLInputElement>);
    });

    await act(async () => {
      await result.current.handleSubmit(event);
    });

    // Verificar que useNavigate fue llamado inmediatamente, sin retardos
    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.LOGIN);
    expect(result.current.success).toBeUndefined();
  });
});