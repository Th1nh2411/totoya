import styles from './UtilityPage.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Button, Col, Flex, Form, Input, Row } from 'antd';
import { useContext, useEffect, useState } from 'react';
import commonServices from '../../services/commonServices';
import Title from 'antd/es/typography/Title';
import UtilityItem from './UtilityItem';
const cx = classNames.bind(styles);

function UtilityPage() {
    const [listUtility, setListUtility] = useState([]);
    useEffect(() => {
        const getNewsData = async () => {};
        getNewsData();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-section')}>
                <div className={cx('banner-content')}>TIỆN ÍCH</div>
            </div>
            <div>
                <Title level={5} style={{ textAlign: 'center', marginBlock: 20 }}>
                    "Tự hào là doanh nghiệp đứng vị trí dẫn đầu trên thị trường về dịch vụ sau bán hàng trong nhiều năm
                    liên tiếp"
                </Title>
                <Row>
                    {listUtility.map((item, index) => (
                        <Col xs={12} md={6} key={index}>
                            <UtilityItem url={item} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default UtilityPage;
