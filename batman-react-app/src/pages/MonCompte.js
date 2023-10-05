import React from 'react';
import { useUser } from '../context/AuthContext';

function MonCompte() {
  const user = useUser();

  return (
    <div>
      {user ? (
        <div>
          <p>Bienvenue, {user.displayName}</p>
          {/* Affichez les informations de l'utilisateur ici */}
        </div>
      ) : (
        <p>Connectez-vous pour accéder à votre compte.</p>
      )}
    </div>
  );
}

export default MonCompte;
