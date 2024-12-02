import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../types/AuthContext';

export const ButtonProfile: React.FC = () => {
    const navigate = useNavigate();  // Usamos el hook de navegación para redirigir
    const { token, user, logout } = useAuth();
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };


    return (
        <div className="relative">
            <button
                data-popover-target=  "menu-1"
                data-popover-nested= "true"
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-red-700 transition-all duration-300" type="button">
                <span role="img" aria-label="Perfil">👤</span>
            </button>
            {isMenuVisible && (
            <ul
            role="menu"
            data-popover="menu-1"
            data-popover-placement="bottom"
            className="absolute right-0 mt-2 z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-sm focus:outline-none">
                <li
                        role="menuitem"
                        className="cursor-pointer text-slate-800 text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                    >
                        {user?.username}
                </li>
                
                
                <li
                    role="menuitem"
                    className="cursor-pointer text-slate-800 text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                >
                    {`Perfil`}
                </li>
                <li
                    role="menuitem"
                    className="cursor-pointer text-slate-800 text-sm flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                    onClick={logout}
                >
                    {`Salir`}
                </li>
            </ul>
            )}
        </div>
    );
}