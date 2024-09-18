import styles from './UtilityPage.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Button, Col, Flex, Form, Input, Row } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { StoreContext, actions } from '../../store';
const cx = classNames.bind(styles);

function UtilityPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-section')}></div>
            <div className={cx('estimation-wrapper')}>
                <h1>DỰ TOÁN CHI PHÍ</h1>
                <p>Quý khách vui lòng điền thông tin và nhấn tính chi phí</p>
                <Form size="large" labelCol={{ style: { width: 130, textAlign: 'start' } }}>
                    <Form.Item name="model" label="Hộ khẩu">
                        <Input variant="filled" />
                    </Form.Item>
                    <Form.Item name="plateColor" label="Màu biển">
                        <Input variant="filled" />
                    </Form.Item>
                    <Form.Item name="prepaid" label="Trả trước">
                        <Input variant="filled" />
                    </Form.Item>
                    <Form.Item name="loan" label="Vay">
                        <Input variant="filled" />
                    </Form.Item>
                    <Form.Item name="loanTime" label="Thời gian vay">
                        <Input variant="filled" />
                    </Form.Item>
                    <Form.Item name="loanType" label="Gói vay">
                        <Input variant="filled" />
                    </Form.Item>
                    <Form.Item name="customerName" label="Tên KH">
                        <Input variant="filled" />
                    </Form.Item>
                    <Form.Item name="customerPhone" label="Số điện thoại Zalo">
                        <Input variant="filled" />
                    </Form.Item>
                    <Form.Item>
                        Thông tin lăn bánh và khoản vay sẽ được sớm nhất tới số SĐT zalo mà bạn nhập. Nếu không có Zalo,
                        nhân viên sẽ liên hệ trực tiếp qua SĐT mà bạn để lại khi điền thông tin.
                    </Form.Item>
                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit">
                            Tính chi phí
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default UtilityPage;
