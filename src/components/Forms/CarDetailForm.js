import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Text from 'antd/es/typography/Text';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import { EditFilled, PlusOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import { useForm } from 'antd/es/form/Form';
import carServices from '../../services/carServices';

function CarDetailForm({ data, onSubmit = () => {} }) {
    const [form] = useForm();
    const [rerender, setRerender] = useState();
    const handleSubmitForm = async (values) => {
        if (data) {
            const res = await carServices.updateCar(data._id, values);
            if (res?.status === 'success') {
                onSubmit();
            }
        } else {
            const res = await carServices.createCar(values);
            if (res?.status === 'success') {
                onSubmit();
            }
        }
    };

    const navigate = useNavigate();
    return (
        <div>
            <Title style={{ marginBottom: 20, textAlign: 'center' }}>
                {data ? 'Chỉnh sửa thông tin xe' : 'Thêm xe mới'}
            </Title>
            <Form
                onValuesChange={setRerender}
                initialValues={data}
                form={form}
                size="large"
                labelCol={{ style: { width: 100, textAlign: 'start' } }}
                onFinish={handleSubmitForm}
            >
                <Row gutter={16}>
                    <Col xs={12} md={16}>
                        <Form.Item name="name" label="Tên xe">
                            <Input variant="filled" />
                        </Form.Item>
                    </Col>
                    <Col xs={12} md={8}>
                        <Form.Item name="color" label="Màu sắc">
                            <Select placeholder="Màu xe" variant="filled">
                                <Option value="Xám">Xám</Option>
                                <Option value="Đen">Đen</Option>
                                <Option value="Trắng">Trắng</Option>
                                <Option value="Đỏ">Đỏ</Option>
                                <Option value="Xanh">Xanh</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={12} md={8}>
                        <Form.Item name="discount" label="Giảm giá">
                            <Input type="text" variant="filled" />
                        </Form.Item>
                    </Col>
                    <Col xs={12} md={8}>
                        <Form.Item name="engine" label="Động cơ">
                            <Input type="text" variant="filled" />
                        </Form.Item>
                    </Col>
                    <Col xs={12} md={8}>
                        <Form.Item name="fuel" label="Nhiên liệu">
                            <Select placeholder="Nhiên liệu" variant="filled">
                                <Option value="Xăng">Xăng</Option>
                                <Option value="Dầu">Dầu</Option>
                                <Option value="Điện">Điện</Option>
                                <Option value="Hybrid">Hybrid</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={12} md={8}>
                        <Form.Item name="gearbox" label="Hộp số">
                            <Select placeholder="Hộp số" variant="filled">
                                <Option value="Số Sàn">Số Sàn</Option>
                                <Option value="Số Tự Động">Số Tự Động</Option>
                                <Option value="CVT">CVT</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={12} md={8}>
                        <Form.Item name="location" label="Vị trí">
                            <Input variant="filled" />
                        </Form.Item>
                    </Col>
                    <Col xs={12} md={8}>
                        <Form.Item name="mileage" label="Số KM đã đi">
                            <Input type="number" variant="filled" />
                        </Form.Item>
                    </Col>
                    <Col xs={12} md={8}>
                        <Form.Item name="price" label="Giá">
                            <Input type="text" variant="filled" />
                        </Form.Item>
                    </Col>
                    <Col xs={12} md={8}>
                        <Form.Item name="seats" label="Số ghế">
                            <Input type="number" variant="filled" />
                        </Form.Item>
                    </Col>
                    <Col xs={12} md={8}>
                        <Form.Item name="year" label="Năm sản xuất">
                            <Input type="number" variant="filled" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item style={{ textAlign: 'center', marginBottom: 0 }}>
                    <Button
                        disabled={!form.isFieldsTouched()}
                        type="primary"
                        htmlType="submit"
                        icon={data ? <EditFilled /> : <PlusOutlined />}
                    >
                        {data ? 'Lưu' : 'Thêm'}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CarDetailForm;
