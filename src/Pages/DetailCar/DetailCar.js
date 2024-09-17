import styles from './DetailCar.module.scss';
import classNames from 'classnames/bind';
import images from '../../assets/images';
import { useContext, useEffect, useState } from 'react';
import { StoreContext, actions } from '../../store';
import { Button, Col, Divider, Flex, Image, Row, Select } from 'antd';
import Text from 'antd/es/typography/Text';
import { useNavigate, useParams } from 'react-router';
import { mockCars } from '../UsedCarPage/data';
import Title from 'antd/es/typography/Title';
const cx = classNames.bind(styles);

function DetailCar() {
    const { id } = useParams();
    const data = mockCars.find((item) => item.id == id);
    const [mainImage, setMainImage] = useState(data.images[0]);
    const [isFading, setIsFading] = useState(false);
    const changeImage = (newImage) => {
        if (newImage === mainImage) return;
        setIsFading(true);

        setTimeout(() => {
            setMainImage(newImage);
            setIsFading(false);
        }, 200);
    };

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
                        <Button type="primary" style={{ width: '100%', marginTop: 40 }}>
                            Liên hệ
                        </Button>
                    </div>
                </Col>
            </Row>
            <div>
                <Title level={3} style={{ color: 'var(--primary-color)', fontWeight: 500 }}>
                    THÔNG TIN XE
                </Title>
                <Divider style={{ margin: '15px 0' }} />
            </div>
        </div>
    );
}

export default DetailCar;
