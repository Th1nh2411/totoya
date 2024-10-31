import * as httpRequest from '../utils/httpRequest';
const commonServices = {
    exportLoanOptions: async () => {
        try {
            const headers = { params: {}, responseType: 'arraybuffer' };
            return await httpRequest.get('download-excel', headers);
        } catch (error) {
            console.error(error);
        }
    },
    loginAdmin: async (body) => {
        try {
            const headers = { params: {} };
            return await httpRequest.post('users/login', body, headers);
        } catch (error) {
            console.error(error);
        }
    },
    logoutAdmin: async (body) => {
        try {
            const headers = { params: {} };
            return await httpRequest.get('users/logout', body, headers);
        } catch (error) {
            console.error(error);
        }
    },
    updateAdmin: async (body) => {
        try {
            const headers = { params: {} };
            return await httpRequest.post('auth/update', body, headers);
        } catch (error) {
            console.error(error);
        }
    },
};

export default commonServices;
