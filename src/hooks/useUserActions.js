import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import Cookies from 'js-cookie';
import { getCookie, setCookie, removeCookie } from './useCookies';
import { authAtom } from '../constant/atom';
import commonServices from '../services/commonServices';
import config from '../config';
import { message } from 'antd';

const useUserActions = () => {
    const navigate = useNavigate();
    const [authData, setAuthAtom] = useRecoilState(authAtom);
    const [cookies] = useState(getCookie('user'));
    const cookiesRef = useRef(cookies);

    useEffect(() => {
        cookiesRef.current = cookies;
    }, [cookies]);

    const logout = async () => {
        const res = await commonServices.logoutAdmin({ refresh_token_id: cookies?.refresh_token_id });
        removeCookie('user', '/');
        setAuthAtom({
            isLoggedIn: false,
            user: null,
        });
    };

    const login = async (body = {}) => {
        try {
            const res = await commonServices.loginAdmin(body);
            if (res?.status === 'success' && res?.data.user) {
                setCookie('user', res?.data.user, { path: '/' });
                setAuthAtom((prev) => ({
                    ...prev,
                    isLoggedIn: true,
                    user: res?.data.user,
                }));
                navigate(config.routes.admin);
                message.success('Login thành công');
                return res;
            }
        } catch (error) {
            return false;
        }
    };
    const updateProfile = async (data) => {
        const res = await commonServices.updateAdmin({ ...data, id: authData.user?.id });
        if (res?.status === 'success') {
            setAuthAtom((prev) => ({
                ...prev,
                user: { ...prev?.user, ...data },
            }));
            setCookie('user', { ...authData?.user, ...data }, { path: '/' });
        }
    };
    const register = () => {};
    return {
        login,
        logout,
        register,
        updateProfile,
    };
};

export default useUserActions;
