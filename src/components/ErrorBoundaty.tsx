import React, { ReactNode, useEffect } from 'react';
import { useErrorBoundary } from '../hooks/useErrorBoundary';

interface Props {
  children: ReactNode;
  fallback?: ReactNode | ((error: Error | null) => ReactNode);
}

const ErrorBoundary: React.FC<Props> = ({ children, fallback }) => {
  const { hasError, error, handleError, resetError } = useErrorBoundary();

  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      event.preventDefault();
      handleError(event.error);
    };

    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, [handleError]);

  if (hasError) {
    if (typeof fallback === 'function') {
      return <>{fallback(error)}</>;
    }
    if (fallback) {
      return <>{fallback}</>;
    }
    return (
      <div style={{ padding: '20px', backgroundColor: '#ffeeee', border: '1px solid #ff0000', borderRadius: '5px' }}>
        <h1>Oops, algo deu errado.</h1>
        <p>Desculpe pela inconveniência. Por favor, tente recarregar a página.</p>
        {error && (
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error.toString()}
          </details>
        )}
        <button onClick={resetError}>Tentar novamente</button>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;