import Cookies from 'js-cookie';

export const setCookie = (name, data, config = {}) => {
    return Cookies.set(name, JSON.stringify(data), config);
};

export const removeCookie = (name, config = {}) => {
    return Cookies.remove(name, config);
};

export const getCookie = (name) => {
    const cookieData = Cookies.get(name) !== undefined ? Cookies.get(name) : null;
    let results;

    if (cookieData) {
        try {
            results = JSON.parse(cookieData);
        } catch (error) {
            console.error('Error when parse JSON data:', error);
        }
    } else {
        console.log('Cookie not exists or empty.');
    }

    return results;
};
