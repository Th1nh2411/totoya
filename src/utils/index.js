import axios from 'axios';
import dayjs from 'dayjs';

export const fetchMetaData = async (url) => {
    try {
        const response = await axios.get(url);
        const htmlString = response.data;

        // Parse HTML thành DOM
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');

        // Lấy title
        const title = doc.querySelector('title') ? doc.querySelector('title').innerText : 'No title';

        // Lấy description từ thẻ meta
        const description = doc.querySelector('meta[name="description"]')
            ? doc.querySelector('meta[name="description"]').getAttribute('content')
            : 'No description';

        // Lấy ảnh từ thẻ meta (og:image)
        const image = doc.querySelector('meta[property="og:image"]')
            ? doc.querySelector('meta[property="og:image"]').getAttribute('content')
            : 'No image';

        return { title, description, image };
    } catch (error) {
        console.error('Error fetching metadata:', error);
        return { title: 'Error', description: 'Error', image: '' };
    }
};
export const goExport = (data, fileName = dayjs().format('YYYYMMDD'), fileType = '.xlsx') => {
    let url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName + fileType);
    document.body.appendChild(link);
    link.click();
    link.remove();
};
