import styles from './UtilityPage.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Button, Col, Flex, Form, Input, Row } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { StoreContext, actions } from '../../store';
import commonServices from '../../services/commonServices';
const cx = classNames.bind(styles);

function UtilityPage() {
    useEffect(() => {
        const getNewsData = async () => {
            const res = await commonServices.getNews();
            console.log(res);
        };
        getNewsData();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-section')}>
                <div className={cx('banner-content')}>TIỆN ÍCH</div>
            </div>
        </div>
    );
}

export default UtilityPage;
