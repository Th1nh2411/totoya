import { ReactNode, useEffect } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import config from '../config';
import useUserActions from '../hooks/useUserActions';

// project import

// types

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const { logout } = useUserActions();
    const isAdmin = useMatch('/admin');
    console.log(isAdmin);
    useEffect(() => {
        if (!isLoggedIn) {
            navigate(config.routes.loginAdmin, { replace: true });
            logout();
        } else if (isAdmin) {
            navigate(config.routes.carAdmin, { replace: true });
        }
    }, [isLoggedIn, navigate]);

    return isLoggedIn ? children : null;
};

export default AuthGuard;
