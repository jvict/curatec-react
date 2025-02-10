import React, { useState } from 'react';

const ErrorThrower: React.FC = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('Erro proposital lançado pelo ErrorThrower');
  }

  return (
    <div>
      <h3>Componente que pode lançar erro</h3>
      <button onClick={() => setShouldThrow(true)}>
        Lançar Erro
      </button>
    </div>
  );
};

export default ErrorThrower;