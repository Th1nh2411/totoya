import styles from './UsedCarPage.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { useContext, useEffect, useState, useRef } from 'react';
import { Col, Flex, Row, Select } from 'antd';
import { mockCars } from './data';
import { useNavigate } from 'react-router';
import ProductItem from '../../components/ProductItem';
import carServices from '../../services/carServices';
const cx = classNames.bind(styles);

function UsedCarPage() {
    const [filter, setFilter] = useState({});
    const [listCar, setListCar] = useState([]);
    const originList = useRef([]);
    useEffect(() => {
        const handleFetchListCar = async () => {
            const result = await carServices.getCars();
            originList.current = result?.data || [];
            setListCar(originList.current);
        };
        handleFetchListCar();
    }, []);
    useEffect(() => {
        let filteredList = [...originList.current];
        filteredList = filteredList
            .filter((car) => {
                // Lọc theo tình trạng cọc
                if (filter.deposit === 'deposit') return car.deposit === true;
                if (filter.deposit === 'not_deposit') return car.deposit === false;
                return true;
            })
            .filter((car) => {
                return filter.type === car.type;
            })
            .filter((car) => {
                // Lọc theo mức giá
                if (filter.price === 'lt_300') return car.price < 300;
                if (filter.price === 'bt_300-500') return car.price >= 300 && car.price <= 500;
                if (filter.price === 'bt_500-700') return car.price >= 500 && car.price <= 700;
                if (filter.price === 'bt_700-1000') return car.price >= 700 && car.price <= 1000;
                if (filter.price === 'bt_1000-1500') return car.price >= 1000 && car.price <= 1500;
                if (filter.price === 'gt_1500') return car.price > 1500;
                return true;
            })
            // .sort((a, b) => {
            //     // Sắp xếp theo giá
            //     if (filter.sort === 'price_desc') return b.price - a.price;
            //     if (filter.sort === 'price_asc') return a.price - b.price;
            //     return 0;
            // });
        setListCar(filteredList);
        console.log('filter', filter);
        console.log('listCar', filteredList);
    }, [filter]);
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>XE ĐÃ QUA SỬ DỤNG</h1>
            <Flex justify="end" gap={5} wrap>
                <Select
                    className={cx('select-input')}
                    value={filter.sort}
                    onChange={(value) => setFilter((prev) => ({ ...prev, type: value }))}
                    size="large"
                    placeholder="Loại xe"
                    allowClear
                    options={[
                        { label: "Wigo", value: "Wigo" },
                        { label: "Vios", value: "Vios" },
                        { label: "Fortuner", value: "Fortuner" },
                        { label: "Innova", value: "Innova" },
                        { label: "Camry", value: "Camry" },
                        { label: "Altis", value: "Altis" },
                        { label: "Land", value: "Land" },
                        { label: "Veloz", value: "Veloz" },
                        { label: "Avanza", value: "Avanza" },
                        { label: "Raize", value: "Raize" },
                        { label: "Rush", value: "Rush" },
                        { label: "Cross", value: "Cross" },
                        { label: "Yaris", value: "Yaris" },
                        { label: "Dòng Khác", value: "" }
                    ]}
                ></Select>
                <Select
                    className={cx('select-input')}
                    value={filter.deposit}
                    onChange={(value) => setFilter((prev) => ({ ...prev, deposit: value }))}
                    size="large"
                    placeholder="Tình trạng cọc"
                    allowClear
                    options={[
                        { label: 'Đã đặt cọc', value: 'deposit' },
                        { label: 'Chưa đặt cọc', value: 'not_deposit' },
                    ]}
                ></Select>
                <Select
                    className={cx('select-input')}
                    value={filter.price}
                    onChange={(value) => setFilter((prev) => ({ ...prev, price: value }))}
                    size="large"
                    placeholder="Chọn mức giá"
                    allowClear
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
                {listCar.map((item, index) => (
                    <Col xs={24} sm={12} lg={6} key={index}>
                        <ProductItem data={item} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default UsedCarPage;
