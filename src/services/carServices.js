import * as httpRequest from '../utils/httpRequest';
const carServices = {
    getCars: async () => {
        try {
            const headers = { params: {} };
            return await httpRequest.get('/old_car', headers);
        } catch (error) {
            console.error(error);
        }
    },
    createCar: async (body) => {
        try {
            const headers = { params: {} };
            return await httpRequest.post(`/old_car`, body, headers);
        } catch (error) {
            console.error(error);
        }
    },
    updateCar: async (id, body) => {
        try {
            const headers = { params: {} };
            return await httpRequest.patch(`/old_car/${id}`, body, headers);
        } catch (error) {
            console.error(error);
        }
    },
    uploadCarImage: async (id, body) => {
        try {
            const headers = { params: {}, 'Content-Type': 'multipart/form-data' };
            return await httpRequest.patch(`/old_car/update_photo/${id}`, body, headers);
        } catch (error) {
            console.error(error);
        }
    },
    deleteCars: async (body) => {
        try {
            const headers = { params: {} };
            return await httpRequest.del(`/old_car`, body, headers);
        } catch (error) {
            console.error(error);
        }
    },
    getDetailCar: async (id) => {
        try {
            const headers = { params: {} };
            return await httpRequest.get(`/old_car/${id}`, headers);
        } catch (error) {
            console.error(error);
        }
    },
};

export default carServices;
