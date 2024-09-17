import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { useContext, useEffect, useState } from 'react';
import { StoreContext, actions } from '../../store';
import { Badge, Button, Carousel, Flex, Col, Row, Space } from 'antd';
import Slide from '../../components/Slide';
import CourseItem from '../../components/CourseItem';
import HOME_DATA from './data';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../config';
import MentorItem from '../../components/MentorItem/MentorItem';
import { priceFormat } from '../../utils/format';
import Text from 'antd/es/typography/Text';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
const cx = classNames.bind(styles);
const bannerImg = [images.banner1, images.banner2, images.banner3, images.banner4, images.banner5, images.banner6];
function Home() {
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')}>
            {/* BANNER SECTION */}
            <section
                style={{ background: `url(${HOME_DATA.banner.image}) center / cover no-repeat` }}
                className={cx('banner-section')}
            >
                <Slide navigation>
                    {bannerImg.map((item, index) => (
                        <div key={index}>
                            <Image src={item} alt={`banner${index}`} className={cx('banner-img')} />
                        </div>
                    ))}
                </Slide>
            </section>
            {/* ABOUT US SECTION */}
            <section
                style={{ background: `url('${HOME_DATA.about.overlayImage}') center / cover no-repeat fixed` }}
                className={cx('aboutUs-section')}
            >
                <div className={cx('aboutUs-content')}>
                    <Flex gap={60}>
                        <div>
                            <Image src={images.staff1} alt={`staff1`} className={cx('aboutUs-img')} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 18, lineHeight: 2 }}>
                                <FaQuoteLeft />
                                <i>
                                    &nbsp;Uy tín tạo niềm tin, với phương châm là{' '}
                                    <strong>không chạy theo về giá</strong>, không bán hàng bằng mọi giá, không bất chấp
                                    tất cả để bán hàng&nbsp;
                                </i>
                                <FaQuoteRight />
                            </div>
                            <h3 style={{ fontWeight: 700, marginTop: 32 }}>Phước Dũng</h3>
                            <p>Nhân Viên Kinh Doanh</p>
                        </div>
                    </Flex>
                </div>
            </section>
            {/* carModels SECTION */}
            <section className={cx('models-section')}>
                <h1 className={cx('section-title')}>{HOME_DATA.carModels.title}</h1>
                <div className={cx('models-body')}>
                    <Row gutter={[40, 40]}>
                        {HOME_DATA.carModels.items.map((item, index) => (
                            <Col xs={12} lg={6} key={index}>
                                <div className={cx('model-item')}>
                                    <Image src={item.image} className={cx('model-image')} />
                                    <Text className={cx('model-name')}>{item.name}</Text>
                                    <Text className={cx('model-price')}>Giá từ: {priceFormat(item.price)}</Text>
                                    <Flex gap={2}>
                                        <Button
                                            onClick={() => navigate(config.routes.course)}
                                            type="primary"
                                            style={{ borderRadius: '20px 0 0 20px', width: 110, fontWeight: 600 }}
                                            size="large"
                                        >
                                            Dự toán
                                        </Button>
                                        <Button
                                            type="primary"
                                            style={{ borderRadius: '0 20px 20px 0', width: 110, fontWeight: 600 }}
                                            size="large"
                                        >
                                            Lái thử
                                        </Button>
                                    </Flex>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
            {/* map SECTION */}
            <section className={cx('map-section')}>
                <div style={{ padding: 10 }}>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.015678301439!2d106.7530110760889!3d10.810110789340701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a7025f78a95%3A0x594f755a61361da7!2zVG95b3RhIMSQw7RuZyBTw6BpIEfDsm4!5e0!3m2!1sen!2sus!4v1726554285548!5m2!1sen!2sus"
                        width="100%"
                        height="500"
                        loading="lazy"
                        style={{ border: 0 }}
                    ></iframe>
                </div>
            </section>
        </div>
    );
}

export default Home;
