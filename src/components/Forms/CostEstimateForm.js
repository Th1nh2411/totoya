import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import Image from '../Image';
import images from '../../assets/images';
import { useNavigate } from 'react-router';
import Text from 'antd/es/typography/Text';
import { Button, Form, Input, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import { useForm } from 'antd/es/form/Form';

function CostEstimateForm({ data = {}, onSubmit = () => {} }) {
    const navigate = useNavigate();
    const [paymentType, setPaymentType] = useState(false);
    return (
        <div className="wrapper">
            <h1>DỰ TOÁN CHI PHÍ</h1>
            <p>Quý khách vui lòng điền thông tin và nhấn tính chi phí</p>
            <Form size="large" labelCol={{ style: { width: 130, textAlign: 'start' } }} onFinish={onSubmit}>
                <Form.Item name="model" label="Hộ khẩu">
                    <Input variant="filled" />
                </Form.Item>
                <Form.Item name="plateColor" label="Màu biển">
                    <Select placeholder="Chọn màu biển" variant="filled">
                        <Option value="Vàng">Vàng</Option>
                        <Option value="Trắng">Trắng</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="prepaid" label="Trả trước">
                    <Input
                        type="number"
                        variant="filled"
                        onChange={(e) => {
                            if (e.target.value) setPaymentType('prepaid');
                            else setPaymentType(null);
                        }}
                        disabled={paymentType === 'loan'}
                    />
                </Form.Item>
                <Form.Item name="loan" label="Vay">
                    <Input
                        type="number"
                        variant="filled"
                        onChange={(e) => {
                            if (e.target.value) setPaymentType('loan');
                            else setPaymentType(null);
                        }}
                        disabled={paymentType === 'prepaid'}
                    />
                </Form.Item>
                <Form.Item name="loanTime" label="Thời gian vay">
                    <Input variant="filled" disabled={paymentType === 'prepaid'} />
                </Form.Item>
                <Form.Item name="loanType" label="Gói vay">
                    <Select variant="filled" placeholder="Chọn gói vay" allowClear disabled={paymentType === 'prepaid'}>
                        <Option value="Truyền Thống">Truyền Thống</Option>
                        <Option value="50/50">50/50</Option>
                        <Option value="50/50 Plus">50/50 Plus</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="customerName" label="Tên KH">
                    <Input variant="filled" />
                </Form.Item>
                <Form.Item name="customerPhone" label="Số điện thoại Zalo">
                    <Input variant="filled" />
                </Form.Item>
                <p>
                    Thông tin lăn bánh và khoản vay sẽ được sớm nhất tới số SĐT zalo mà bạn nhập. Nếu không có Zalo,
                    nhân viên sẽ liên hệ trực tiếp qua SĐT mà bạn để lại khi điền thông tin.
                </p>
                <Form.Item style={{ textAlign: 'center', margin: 0 }}>
                    <Button type="primary" htmlType="submit">
                        Tính chi phí
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CostEstimateForm;
