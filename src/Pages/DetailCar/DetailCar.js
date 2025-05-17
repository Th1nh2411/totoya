import styles from './DetailCar.module.scss';
import classNames from 'classnames/bind';
import images from '../../assets/images';
import { useContext, useEffect, useState } from 'react';
import { Button, Col, Divider, Flex, Image, Row, Select, Tooltip } from 'antd';
import Text from 'antd/es/typography/Text';
import { useNavigate, useParams } from 'react-router';
import { mockCars } from '../UsedCarPage/data';
import Title from 'antd/es/typography/Title';
import ProductItem from '../../components/ProductItem';
import { useSetRecoilState } from 'recoil';
import { costEstimateRegAtom } from '../../constant/atom';
import carServices from '../../services/carServices';
const cx = classNames.bind(styles);

function DetailCar() {
    const { id } = useParams();
    const data = mockCars.find((item) => item.id == id);
    const [mainImage, setMainImage] = useState();
    const [isFading, setIsFading] = useState(false);
    const [viewData, setViewData] = useState();
    const [carDetail, setCarDetail] = useState({});
    const setCostEstimateModal = useSetRecoilState(costEstimateRegAtom);
    useEffect(() => {
        if (id) {
            const handleFetchDetailCar = async () => {
                const result = await carServices.getDetailCar(id);
                setCarDetail(result?.data || {});
                setMainImage(result?.data?.images[0]);
            };
            handleFetchDetailCar();
            const handleFetchListCar = async () => {
                const result = await carServices.getCars();
                console.log(123123123123, result.data);
                setViewData(result?.data);
            };
            handleFetchListCar();
            window.scrollTo(0, 0);
        }
    }, [id]);
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
                        <Flex gap={10} wrap>
                        <Image.PreviewGroup>
                            {carDetail?.images?.map((src, index) => (
                            <Image
                                preview
                                onClick={() => changeImage(src)}
                                key={index}
                                src={src}
                                style={{ height: 100, width: 100, borderRadius: 5, objectFit: 'cover' }}
                                className="hovered"
                            />
                            ))}
                        </Image.PreviewGroup>
                        </Flex>
                    </Flex>
                </Col>
                <Col xs={24} md={12}>
                    <div>
                        <Flex vertical>
                            <h1 className={cx('product-name')}>{carDetail?.name}</h1>
                            <h2>Giá: {carDetail?.price}</h2>
                            <Text>Xe tại: {carDetail?.location}</Text>
                            <Text>Màu sắc: {carDetail?.color}</Text>
                        </Flex>
                        <Flex gap={2}>
                            <Button
                                size="large"
                                onClick={() => setCostEstimateModal({ visible: true, data:carDetail._id })}
                                type="primary"
                                style={{ borderRadius: '20px 0 0 20px', width: '100%', marginTop: 40 }}
                            >
                                Dự toán
                            </Button>
                            <Button
                                size="large"
                                type="primary"
                                style={{ borderRadius: '0 20px 20px 0', width: '100%', marginTop: 40 }}
                                onClick={() => window.open('https://zalo.me/0981061517', '_blank')} // Chuyển đến Zalo với số điện thoại
                            >
                                Liên hệ
                            </Button>
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
                        <tbody>
                            <tr>
                                <td>Loại xe</td>
                                <td>{carDetail?.name}</td>
                            </tr>

                            <tr>
                                <td>Năm sản xuất</td>
                                <td>{carDetail?.year}</td>
                            </tr>

                            <tr>
                                <td>Màu xe</td>
                                <td>{carDetail?.color}</td>
                            </tr>

                            <tr>
                                <td>Số km</td>
                                <td>{carDetail?.mileage}</td>
                            </tr>

                            <tr>
                                <td>Hộp số</td>
                                <td>{carDetail?.gearbox}</td>
                            </tr>

                            <tr>
                                <td>Nhiên liệu</td>
                                <td>{carDetail?.fuel}</td>
                            </tr>

                            <tr>
                                <td>Số chỗ ngồi</td>
                                <td>{carDetail?.seats}</td>
                            </tr>
                            <tr>
                                <td>Động cơ</td>
                                <td>{carDetail?.engine}</td>
                            </tr>
                            <tr>
                                <td>Giới thiệu sơ lượt về xe</td>
                                <td
                                    style={{
                                        maxWidth: '300px',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    {carDetail?.detail}
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
                {viewData && (
                    <Row gutter={[20, 20]}>
                        {viewData
                            .filter((item) => item._id != id)
                            .slice(0, 4)
                            .map((item, index) => (
                                <Col xs={24} sm={12} lg={6} key={index}>
                                    <ProductItem data={item} />
                                </Col>
                            ))}
                    </Row>
                )}
            </div>
        </div>
    );
}

export default DetailCar;
