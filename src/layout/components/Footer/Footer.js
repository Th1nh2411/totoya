import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import Image from '../../../components/Image/Image';
import { Col, Row } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import { IoLocationSharp, IoMail } from 'react-icons/io5';
const cx = classNames.bind(styles);

function Header() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Row className={cx('g-6')}>
                    <Col md={6} lg={5}>
                        <div className={cx('info-wrapper')}>
                            <Image src={images.subLogo} />
                            <div className={cx('introduce')}>
                                Uy tín tạo niềm tin, với phương châm là không chạy theo về giá, không bán hàng bằng mọi
                                giá, không bất chấp tất cả để bán hàng
                            </div>
                            <div className={cx('follow-wrapper')}>
                                <h4>Theo dõi chúng tôi tại:</h4>
                                <div className={cx('list-icons')}>
                                    <FaFacebookF className={cx('social-icon')} />
                                    <FaLinkedinIn className={cx('social-icon')} />
                                    <FaYoutube className={cx('social-icon')} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className={cx('info-wrapper')}>
                            <div className={cx('info-title')}>Menu</div>
                            <div className={cx('info-subtitle')}>Giới thiệu</div>
                            <div className={cx('info-subtitle')}>Xe đã qua sử dụng</div>
                            <div className={cx('info-subtitle')}>Ngân hàng</div>
                            <div className={cx('info-subtitle')}>Tiện ích</div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className={cx('info-wrapper')}>
                            <div className={cx('info-title')}>Liên hệ với chúng tôi</div>
                            <div className={cx('info-subtitle')}>
                                <IoLocationSharp className={cx('info-icon')} />
                                507 Đ. Võ Nguyên Giáp, An Phú, Thủ Đức
                            </div>
                            <div className={cx('info-subtitle')}>
                                <IoMail className={cx('info-icon')} />
                                totoya@gmail.com
                            </div>
                            <div className={cx('info-subtitle')}>
                                <FaPhoneAlt className={cx('info-icon')} />
                                09999999
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={cx('license-wrapper')}>© Copyright 2023 - Empowered by ducthnh2411</div>
        </footer>
    );
}

export default Header;
