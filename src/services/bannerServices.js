import * as httpRequest from '../utils/httpRequest';
const bannerServices = {
    getBanners: async () => {
        try {
            const headers = { params: {} };
            return await httpRequest.get('/banner', headers);
        } catch (error) {
            console.error(error);
        }
    },
};

export default bannerServices;
