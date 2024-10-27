import * as httpRequest from '../utils/httpRequest';
const customerServices = {
    postCustomer: async (data) => {
        try {
            const headers = { params: {} };
            return await httpRequest.post('/customer_infor',data, headers);
        } catch (error) {
            console.error(error);
        }
    },
};

export default customerServices;
