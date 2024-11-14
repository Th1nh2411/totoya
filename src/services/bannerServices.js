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
    createBanner: async (body) => {
        try {
            const headers = { params: {} };
            return await httpRequest.post(`/banner`, body, headers);
        } catch (error) {
            console.error(error);
        }
    },
    updateBanner: async (id, body) => {
        try {
            const headers = { params: {} };
            return await httpRequest.patch(`/banner/${id}`, body, headers);
        } catch (error) {
            console.error(error);
        }
    },
    uploadBannerImage: async (id, body) => {
        try {
            const headers = { params: {}, 'Content-Type': 'multipart/form-data' };
            return await httpRequest.patch(`/banner/update_photo/${id}`, body, headers);
        } catch (error) {
            console.error(error);
        }
    },
    removeBannerImage: async (id, body) => {
        try {
            const headers = { params: {}, 'Content-Type': 'multipart/form-data' };
            return await httpRequest.patch(`/banner/delete_photo/${id}`, body, headers);
        } catch (error) {
            console.error(error);
        }
    },
    deleteBanners: async (body) => {
        try {
            const headers = { params: {} };
            return await httpRequest.del(`/banner`, body, headers);
        } catch (error) {
            console.error(error);
        }
    },
};

export default bannerServices;
