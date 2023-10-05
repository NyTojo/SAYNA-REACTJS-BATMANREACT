import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebaseConfig';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, [auth]);

  // Fonction pour créer un nouvel utilisateur avec l'email et le mot de passe
  const createUserWithEmailAndPasswordHandler = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const authUser = userCredential.user;
      setUser(authUser);
      return authUser;
    } catch (error) {
      // Gérer les erreurs de création d'utilisateur ici
      console.error('Erreur lors de la création de l\'utilisateur :', error);
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ user, createUserWithEmailAndPasswordHandler }}>
      {children}
    </UserContext.Provider>
  );
}

// Exportez également userAuth
export const userAuth = {
  // Vous pouvez ajouter d'autres propriétés ou fonctions liées à l'authentification ici si nécessaire
};
