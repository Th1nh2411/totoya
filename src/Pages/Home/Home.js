import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { useContext, useEffect, useState } from 'react';
import { Badge, Button, Carousel, Flex, Col, Row, Space } from 'antd';
import Slide from '../../components/Slide';
import HOME_DATA from './data';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../config';
import { priceFormat } from '../../utils/format';
import Text from 'antd/es/typography/Text';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import bannerServices from '../../services/bannerServices';
import carServices from '../../services/carServices';
import { useSetRecoilState } from 'recoil';
import { costEstimateRegAtom } from '../../constant/atom';
const cx = classNames.bind(styles);
const bannerImg = [images.banner1, images.banner2, images.banner3, images.banner4, images.banner5, images.banner6];
function Home() {
    const navigate = useNavigate();
    const [listBanner, setListBanner] = useState([]);
    const [listCar, setListCar] = useState([]);
    const setCostEstimateModal = useSetRecoilState(costEstimateRegAtom);
    useEffect(() => {
        const handleFetchListBanner = async () => {
            const result = await bannerServices.getBanners();
            setListBanner(result?.data || []);
        };
        handleFetchListBanner();
        const handleFetchListCar = async () => {
            const result = await carServices.getCarsByCondition({ limit: 4 });
            setListCar(result?.data || []);
        };
        handleFetchListCar();
    }, []);
    return (
        <div className={cx('wrapper')}>
            {/* BANNER SECTION */}
            <section
                style={{ background: `url(${HOME_DATA.banner.image}) center / cover no-repeat` }}
                className={cx('banner-section')}
            >
                <Slide navigation>
                    {listBanner.map((item, index) => (
                        <div key={index}>
                            <Image src={item.images} alt={`banner${index}`} className={cx('banner-img')} />
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
                    <Image src={images.staff1} alt={`staff1`} className={cx('aboutUs-img')} />
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 18, lineHeight: 2 }}>
                            <FaQuoteLeft />
                            <i>
                                &nbsp;Uy tín tạo niềm tin, với phương châm là <strong>không chạy theo về giá</strong>,
                                không bán hàng bằng mọi giá, không bất chấp tất cả để bán hàng&nbsp;
                            </i>
                            <FaQuoteRight />
                        </div>
                        <h3 style={{ fontWeight: 700, marginTop: 32 }}>Phước Dũng</h3>
                        <p>Nhân Viên Kinh Doanh</p>
                    </div>
                </div>
            </section>
            {/* carModels SECTION */}
            <section className={cx('models-section')}>
                <h1 className={cx('section-title')}>{HOME_DATA.carModels.title}</h1>
                <div className={cx('models-body')}>
                    <Row gutter={[40, 40]}>
                        {listCar?.map((item, index) => (
                            <Col xs={24} sm={12} xl={6} key={index}>
                                <div className={cx('model-item')}>
                                    <Image src={item.images[0]} className={cx('model-image')} />
                                    <Text className={cx('model-name')}>{item.name}</Text>
                                    <Text>Giá từ: {item.price} VND</Text>
                                    <Flex gap={2}>
                                        <Button
                                            className={cx('models-btn')}
                                            onClick={() => setCostEstimateModal({ visible: true })}
                                            type="primary"
                                            size="large"
                                        >
                                            Dự toán
                                        </Button>
                                        <Button
                                            className={cx('models-btn', 'right')}
                                            onClick={() => navigate(`usedCar/${item._id}`)}
                                            type="primary"
                                            size="large"
                                        >
                                            Thông tin xe
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
