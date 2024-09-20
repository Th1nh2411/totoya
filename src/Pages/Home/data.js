import { FaGripfire } from 'react-icons/fa';
import { MdSettingsSuggest } from 'react-icons/md';
import { HiQrcode, HiUserGroup } from 'react-icons/hi';
import { BiCheckCircle, BiMoneyWithdraw } from 'react-icons/bi';
import images from '../../assets/images';
const HOME_DATA = {
    banner: {
        image: 'https://bsmart.edu.vn/assets/images/banner/banner.webp',
        title: 'Khởi đầu sự nghiệp của bạn',
        caption: 'Trở thành lập trình viên chuyên nghiệp tại BSMART',
        description:
            'Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa học chất lượng. BSMART sẽ giúp các bạn có định hướng về nghề nghiệp và phát triển bản thân trên con đường trở thành lập trình viên chuyên nghiệp',
        linkCourse: '/course',
    },
    about: {
        title: 'Về chúng tôi',
        description:
            'BSMART được thành lập với mục tiêu trở thành nền tảng tin cậy về đào tạo lập trình viên, kết nối Mentor và Mentee. Với đội ngũ Mentor giàu kinh nghiệm và chuyên môn, BSMART cam kết mang đến các khóa học lập trình chất lượng nhất. Hệ thống khóa học đa dạng và linh hoạt, từ cơ bản đến nâng cao, giúp học viên có thể lựa chọn các khóa học phù hợp với nhu cầu và khả năng của mình. BSMART cập nhật và áp dụng những công nghệ mới, giúp học viên và Mentor được tiếp cận với những kiến thức và kỹ năng mới nhất trong lập trình. Bên cạnh đó, BSMART luôn đặt sự quan tâm, hỗ trợ học viên trong quá trình học tập và phát triển sự nghiệp sau khi tốt nghiệp.',
        overlayImage: 'https://bsmart.edu.vn/assets/images/background.webp',
        aboutImage: 'https://bsmart.edu.vn/files/banner-2.webp',
        linkCourse: '/course',
        linkFb: 'https://www.facebook.com/bsmart.edu.vn',
    },
    carModels: {
        title: 'XE ĐÃ QUA SỬ DỤNG',
        items: [
            { id: 1, name: 'Fortuner', image: images.fortunerModel, price: 400000000 },
            { id: 2, name: 'Rush ', image: images.rushModel, price: 400000000 },
            { id: 3, name: 'Vios', image: images.viosModel, price: 400000000 },
            { id: 4, name: 'Altis', image: images.altisModel, price: 400000000 },
        ],
    },
    map: {
        image: 'https://bsmart.edu.vn/assets/images/funfact_bg.webp',
        title: 'Định hướng và Chuẩn hoá lộ trình học tập',
        caption: 'Học Thật, Dự Án Thật, Mentor Tận Tâm',
        linkCourse: '/course',
        linkFb: 'https://www.facebook.com/bsmart.edu.vn',
    },
    logos: {
        title: 'Nhận được sự tin tưởng của các đối tác',
        items: [
            'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-01.webp',
            'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-02.webp',
            'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-03.webp',
            'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-04.webp',
            'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-05.webp',
            'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-06.webp',
            'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-07.webp',
            'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-01.webp',
        ],
    },
};
export default HOME_DATA;
