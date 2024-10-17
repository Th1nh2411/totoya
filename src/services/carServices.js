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
