import styles from './DetailCar.module.scss';
import classNames from 'classnames/bind';
import images from '../../assets/images';
import { useContext, useEffect, useState } from 'react';
import { StoreContext, actions } from '../../store';
import { Button, Col, Divider, Flex, Image, Row, Select, Tooltip } from 'antd';
import Text from 'antd/es/typography/Text';
import { useNavigate, useParams } from 'react-router';
import { mockCars } from '../UsedCarPage/data';
import Title from 'antd/es/typography/Title';
import ProductItem from '../../components/ProductItem';
import { useSetRecoilState } from 'recoil';
import { costEstimateRegAtom } from '../../constant/atom';
const cx = classNames.bind(styles);

function DetailCar() {
    const { id } = useParams();
    const data = mockCars.find((item) => item.id == id);
    const [mainImage, setMainImage] = useState(data.images[0]);
    const [isFading, setIsFading] = useState(false);
    const setCostEstimateModal = useSetRecoilState(costEstimateRegAtom);
    const changeImage = (newImage) => {
        if (newImage === mainImage) return;
        setIsFading(true);

        setTimeout(() => {
            setMainImage(newImage);
            setIsFading(false);
        }, 200);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Row gutter={[20, 20]}>
                <Col xs={24} md={12}>
                    <Flex vertical gap={20}>
                        <div className={cx('product-image-wrapper', { fade: isFading })}>
                            <Image width={'100%'} height={320} src={mainImage} className={cx('product-image')} />
                        </div>
                        <Flex gap={10}>
                            {data.images?.map((src, index) => (
                                <Image
                                    preview={false}
                                    onClick={() => changeImage(src)}
                                    key={index}
                                    src={src}
                                    style={{ height: 104, width: 104, borderRadius: 5, objectFit: 'cover' }}
                                    className="hovered"
                                />
                            ))}
                        </Flex>
                    </Flex>
                </Col>
                <Col xs={24} md={12}>
                    <div>
                        <Flex vertical>
                            <h1 className={cx('product-name')}>{data.name}</h1>
                            <h2>Giá: {data.price}</h2>
                            <Text>Xe tại: {data.location}</Text>
                            <Text>Màu sắc: {data.color}</Text>
                        </Flex>
                        <Flex gap={2}>
                            <Button
                                size="large"
                                onClick={() => setCostEstimateModal({ visible: true })}
                                type="primary"
                                style={{ borderRadius: '20px 0 0 20px', width: '100%', marginTop: 40 }}
                            >
                                Dự toán
                            </Button>
                            <Tooltip
                                title={
                                    <Flex gap={5}>
                                        <Text>SĐT hoặc Zalo:</Text>
                                        <Text
                                            level={5}
                                            style={{ color: 'var(--primary-color)', fontWeight: 600 }}
                                            copyable
                                        >
                                            0981061517
                                        </Text>
                                    </Flex>
                                }
                                trigger={'click'}
                                color="white"
                            >
                                <Button
                                    size="large"
                                    type="primary"
                                    style={{ borderRadius: '0 20px  20px 0 ', width: '100%', marginTop: 40 }}
                                >
                                    Liên hệ
                                </Button>
                            </Tooltip>
                        </Flex>
                    </div>
                </Col>
            </Row>
            <div>
                <Title level={3} style={{ color: 'var(--primary-color)', fontWeight: 500 }}>
                    THÔNG TIN XE
                </Title>
                <Divider style={{ margin: '15px 0' }} />
                <div>
                    <table class="table table-striped">
                        <tbody style={{ textAlign: 'center' }}>
                            <tr>
                                <td>Loại xe</td>
                                <td>Fortuner 2.4AT</td>
                            </tr>

                            <tr>
                                <td>Năm sản xuất</td>
                                <td>2021</td>
                            </tr>

                            <tr>
                                <td>Màu xe</td>
                                <td>Trắng ngọc trai</td>
                            </tr>

                            <tr>
                                <td>Số km</td>
                                <td>68,148</td>
                            </tr>

                            <tr>
                                <td>Hộp số</td>
                                <td>Tự động</td>
                            </tr>

                            <tr>
                                <td>Nhiên liệu</td>
                                <td>Dầu</td>
                            </tr>

                            <tr>
                                <td>Số chỗ ngồi</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>Động cơ</td>
                                <td>2393</td>
                            </tr>
                            <tr>
                                <td>Phụ kiện được trang bị</td>
                                <td>
                                    <span
                                        style={{ cursor: 'pointer' }}
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title=""
                                        data-original-title=""
                                    ></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <Title level={3} style={{ color: 'var(--primary-color)', fontWeight: 500 }}>
                    CÁC MẪU XE KHÁC
                </Title>
                <Divider style={{ margin: '15px 0' }} />
                <Row gutter={[20, 20]}>
                    {mockCars.slice(0, 4).map((item, index) => (
                        <Col xs={24} sm={12} lg={6} key={index}>
                            <ProductItem data={item} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default DetailCar;
