// Navbar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();  // Usamos el hook de navegación para redirigir

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    navigate('/login');  // Redirigir a la página de login
  };

  return (
    <nav className="bg-red-800 text-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="bg-yellow-600 p-2 rounded-full">
            <span role="img" aria-label="Icono">
              🏷️
            </span>
          </span>
          <h1 className="text-lg font-bold">SubastALL</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 hidden sm:block">
          <input
            type="text"
            placeholder="Buscar sobre artículos del hogar"
            className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring focus:ring-yellow-600 shadow-sm"
          />
        </div>

        {/* Login Button */}
        <div>
          <button onClick={handleLogin}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};
