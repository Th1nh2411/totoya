import * as httpRequest from '../utils/httpRequest';
const commonServices = {
    getNews: async () => {
        try {
            const apikey = process.env.REACT_APP_NEWS_API_KEY;
            const headers = { params: { apiKey: apikey, q: 'thuế trước bạ', language: 'vi', country: 'vi' } };
            return await httpRequest.get('https://newsdata.io/api/1/latest', headers);
        } catch (error) {
            console.error(error);
        }
    },
    exportLoanOptions: async () => {
        try {
            const headers = { params: {}, responseType: 'arraybuffer' };
            return await httpRequest.get('download-excel', headers);
        } catch (error) {
            console.error(error);
        }
    },
};

export default commonServices;
