import { message } from 'antd';
import axios from 'axios';
const httpRequest = axios.create({
    baseURL: 'https://api.phuocdungtoyota.com/',
    withCredentials: true,
});
httpRequest.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;

        if (!response) {
            console.error('Network error');
            message.error('Network error');
            return Promise.reject(error);
        }
        switch (response.status) {
            case 400:
                console.error(response.data.message || 'Yêu cầu không hợp lệ.');
                message.error(response.data.message || 'Yêu cầu không hợp lệ.');
                break;
            case 401:
                console.error(response.data.message || 'Chưa đăng nhập.');
                message.error(response.data.message || 'Chưa đăng nhập.');
                break;
            case 403:
                console.error(response.data.message || 'Không có quyền truy cập.');
                message.error(response.data.message || 'Không có quyền truy cập.');
                break;
            case 404:
                console.error(response.data.message || 'Không tìm thấy.');
                message.error(response.data.message || 'Không tìm thấy.');
                break;
            case 500:
                console.error(response.data.message || 'Lỗi máy chủ.');
                message.error(response.data.message || 'Lỗi máy chủ.');
                break;
            default:
                console.error(response.data.message || 'Có lỗi xảy ra.');
                message.error(response.data.message || 'Có lỗi xảy ra.');
        }
        return Promise.reject(error);
    },
);

export const get = async (path, header = {}) => {
    const response = await httpRequest.get(path, header);
    return response.data;
};
export const post = async (path, body = {}, header = {}) => {
    const response = await httpRequest.post(path, body, header);
    return response.data;
};
export const del = async (path, body = {}, config = {}) => {
    const response = await httpRequest.delete(path, { data: body }, config);
    return response.data;
};
export const put = async (path, body = {}, header = {}) => {
    const response = await httpRequest.put(path, body, header);
    return response.data;
};
export const patch = async (path, body = {}, header = {}) => {
    const response = await httpRequest.patch(path, body, header);
    return response.data;
};
// export default httpRequest;
