// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Home/Home';
import LoginForm  from './components/LoginForm/LoginForm'; // Asegúrate de crear este componente
import SignUp from './components/SignUp/SignUp'
import {Profile} from './components/Profile/Profile'
import { AuthProvider } from './types/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Ruta para la página principal (HomePage) */}
          <Route path="/" element={<HomePage />} />

          {/* Ruta para la página de login */}
          <Route path="/login" element={<LoginForm />} />

          {/* Ruta para la página de Registro */}
          <Route path="/SignUp" element={<SignUp />} />

          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
