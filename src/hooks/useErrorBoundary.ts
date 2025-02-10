import { useState, useCallback } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export const useErrorBoundary = () => {
  const [{ hasError, error }, setErrorState] = useState<ErrorBoundaryState>({
    hasError: false,
    error: null,
  });

  const handleError = useCallback((error: Error) => {
    setErrorState({ hasError: true, error });
    console.error('Uncaught error:', error);
  }, []);

  const resetError = useCallback(() => {
    setErrorState({ hasError: false, error: null });
  }, []);

  return { hasError, error, handleError, resetError };
};