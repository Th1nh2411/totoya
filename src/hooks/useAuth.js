import { useRecoilState } from 'recoil';
import { authAtom } from '../constant/atom';
import { useEffect, useState } from 'react';
import { getCookie } from './useCookies';

const useAuth = () => {
    const [auth, setAuth] = useRecoilState(authAtom);
    const [cookie] = useState(getCookie('user'));
    useEffect(() => {
        const checkIsLoggedIn = async () => {
            if (cookie) {
                setAuth((prev) => ({
                    ...prev,
                    isLoggedIn: true,
                    user: cookie,
                }));
            } else {
                setAuth({
                    isLoggedIn: false,
                    user: null,
                });
            }
        };
        // checkIsLoggedIn();
    }, [cookie]);
    return auth;
};
export default useAuth;
