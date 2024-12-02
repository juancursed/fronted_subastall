import React, { createContext, useState, useContext } from 'react';

interface AuthContextType {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
    const [token, setToken] = useState<string | null>(null);
    
    const login = (token: string) => {
        setToken(token);
        localStorage.setItem('authToken', token); // Guardar token en localStorage
    };
    
    const logout = () => {
        setToken(null);
        localStorage.removeItem('authToken');
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
          {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth debe usarse dentro de AuthProvider');
    }
    return context;
};