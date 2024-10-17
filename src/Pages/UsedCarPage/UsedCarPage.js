import styles from './UsedCarPage.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { useContext, useEffect, useState } from 'react';
import { StoreContext, actions } from '../../store';
import { Col, Flex, Row, Select } from 'antd';
import { mockCars } from './data';
import { useNavigate } from 'react-router';
import ProductItem from '../../components/ProductItem';
import carServices from '../../services/carServices';
const cx = classNames.bind(styles);

function UsedCarPage() {
    const [filter, setFilter] = useState({});
    const [listCar, setListCar] = useState([]);
    useEffect(() => {
        const handleFetchListCar = async () => {
            const result = await carServices.getCars();
            setListCar(result?.data || []);
        };
        handleFetchListCar();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>XE ĐÃ QUA SỬ DỤNG</h1>
            <Flex justify="end" gap={5}>
                <Select
                    style={{ width: 180 }}
                    value={filter.sort}
                    onChange={(value) => setFilter((prev) => ({ ...prev, sort: value }))}
                    size="large"
                    placeholder="Sắp xếp theo giá"
                    options={[
                        { label: 'Giá từ cao đến thấp', value: 'price_desc' },
                        { label: 'Giá từ thấp đến cao', value: 'price_asc' },
                    ]}
                ></Select>
                <Select
                    style={{ width: 140 }}
                    value={filter.deposit}
                    onChange={(value) => setFilter((prev) => ({ ...prev, deposit: value }))}
                    size="large"
                    placeholder="Tình trạng cọc"
                    options={[
                        { label: 'Đã đặt cọc', value: 'price_desc' },
                        { label: 'Chưa đặt cọc', value: 'price_asc' },
                    ]}
                ></Select>
                <Select
                    style={{ width: 180 }}
                    value={filter.price}
                    onChange={(value) => setFilter((prev) => ({ ...prev, price: value }))}
                    size="large"
                    placeholder="Chọn mức giá"
                    options={[
                        { label: 'Nhỏ hơn 300', value: 'lt_300' },
                        { label: 'Giá từ: 300-500', value: 'bt_300-500' },
                        { label: 'Giá từ: 500-700', value: 'bt_500-700' },
                        { label: 'Giá từ: 700-1000', value: 'bt_700-1000' },
                        { label: 'Giá từ: 1000-1500', value: 'bt_1000-1500' },
                        { label: 'Lớn hơn 1500', value: 'gt_1500' },
                    ]}
                ></Select>
            </Flex>
            <Row gutter={[20, 40]} style={{ marginTop: 20 }}>
                {mockCars.map((item, index) => (
                    <Col xs={24} sm={12} lg={6} key={index}>
                        <ProductItem data={item} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default UsedCarPage;
