import { renderHook, act } from '@testing-library/react';
import { useLogin } from '../../hooks/auth/useLogin'; 
import * as authApi from '../../api/auth/authApi';
import { useAuth } from '../../context';
import { vi } from 'vitest';
import axios from 'axios';

// Mockear dependencias
vi.mock('axios');
vi.mock('../../api/auth/authApi');
vi.mock('../../context/AuthContext');

const mockLoginUser = vi.spyOn(authApi, 'loginUser');
const mockLoginContext = vi.fn();
const mockSetToken = vi.fn();

vi.mocked(useAuth).mockReturnValue({
  user: null,
  token: null,
  isAuthenticated: false,
  login: mockLoginContext,
  logout: vi.fn(),
  isLoading: false,
});

describe('useLogin Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    vi.mocked(axios.isAxiosError).mockReturnValue(false); 
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  
  const validLoginData = { email: 'user@subastik.com', password: 'password123' };
  const mockAuthResponse = { 
    access_token: 'fake-jwt', 
    user: { id: '1', email: validLoginData.email, name: 'Test User', createdAt: '', updatedAt: '' }
  };

  it('debería manejar la entrada de datos (handleChange)', () => {
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.handleChange({ target: { id: 'email', value: validLoginData.email } } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({ target: { id: 'password', value: validLoginData.password } } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formData.email).toBe(validLoginData.email);
    expect(result.current.formData.password).toBe(validLoginData.password);
  });
  
  it('debería iniciar sesión correctamente y llamar al contexto de login', async () => {
    mockLoginUser.mockResolvedValue(mockAuthResponse);
    const { result } = renderHook(() => useLogin());
    const event = { preventDefault: vi.fn() } as unknown as React.FormEvent;

    act(() => {
        result.current.handleChange({ target: { id: 'email', value: validLoginData.email } } as React.ChangeEvent<HTMLInputElement>);
        result.current.handleChange({ target: { id: 'password', value: validLoginData.password } } as React.ChangeEvent<HTMLInputElement>);
    });

    await act(async () => {
      await result.current.handleSubmit(event);
    });

    expect(mockLoginUser).toHaveBeenCalledWith(validLoginData);
    expect(mockLoginContext).toHaveBeenCalledWith(mockAuthResponse.access_token, mockAuthResponse.user);
    expect(result.current.isLoggedIn).toBe(true);
    expect(result.current.error).toBeNull();
  });
  
  it('debería manejar el error de la API y mostrar el mensaje de error', async () => {
    const errorMessage = 'Credenciales inválidas';
    const errorResponse = { response: { data: { message: errorMessage } } };
    vi.mocked(axios.isAxiosError).mockReturnValue(true);
    mockLoginUser.mockRejectedValue(errorResponse);
    
    const { result } = renderHook(() => useLogin());
    const event = { preventDefault: vi.fn() } as unknown as React.FormEvent;

    await act(async () => {
      await result.current.handleSubmit(event);
    });
    
    expect(mockLoginUser).toHaveBeenCalled();
    expect(mockLoginContext).not.toHaveBeenCalled();
    expect(result.current.error).toBe(errorMessage);
    expect(result.current.isLoggedIn).toBe(false);
  });
});