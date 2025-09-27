import { useState } from 'react';

interface UseLocalStorageReturn<T> {
  value: T;
  setValue: (value: T) => void;
  removeValue: () => void;
}

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): UseLocalStorageReturn<T> => {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue = (newValue: T) => {
    try {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch {
      console.error('Error saving to localStorage');
    }
  };

  const removeStoredValue = () => {
    try {
      setValue(initialValue);
      localStorage.removeItem(key);
    } catch {
      console.error('Error removing from localStorage');
    }
  };

  return {
    value,
    setValue: setStoredValue,
    removeValue: removeStoredValue,
  };
};