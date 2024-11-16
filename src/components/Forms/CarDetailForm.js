import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Text from 'antd/es/typography/Text';
import { Button, Col, Flex, Form, Image, Input, message, Row, Select, Switch, Upload } from 'antd';
import { Option } from 'antd/es/mentions';
import { EditFilled, PlusOutlined, PlusSquareOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import { useForm } from 'antd/es/form/Form';
import carServices from '../../services/carServices';

function CarDetailForm({ data, onSubmit = () => {} }) {
    const [form] = useForm();
    const [rerender, setRerender] = useState();
    const [removedFiles, setRemovedFiles] = useState([]);
    const [shouldRunOnSubmit, setShouldRunOnSubmit] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState(data?.images?.map((item, index) => ({ uid: index, url: item })) || []);
    const [submitLoading, setSubmitLoading] = useState(false);
    const navigate = useNavigate();
    const uploadCarImages = async (carId, fileList) => {
        for (const item of fileList) {
            if (item?.originFileObj instanceof File) {
                const formData = new FormData();
                formData.append('photo', item.originFileObj);
                try {
                    await carServices.uploadCarImage(carId, formData);
                } catch (error) {
                    console.error('Upload failed for file', item.name, error);
                }
            }
        }
    };
    const removeCarImages = async (carId, fileList) => {
        const data = fileList.filter((item) => item.url).map((item) => item.url.split('/').pop());
        await carServices.removeCarImage(carId, { ids: data }).catch((error) => {
            // console.error('Upload failed for file', item.name, error);
        });
        return;
    };
    console.log(fileList);

    const handleSubmitForm = async (values) => {
        setSubmitLoading(false);
        const action = data?._id ? carServices.updateCar : carServices.createCar;
        // values.images = fileList.filter((item) => item.url).map((item) => item.url);
        const response = await action(data?._id || values, data?._id ? values : undefined);

        if (response?.status === 'success') {
            if (!data?._id) {
                await uploadCarImages(response.data._id, fileList);
                message.success('Thêm thành công');
            } else {
                await uploadCarImages(data?._id, fileList);
                await removeCarImages(data?._id, removedFiles);
                message.success('Chỉnh sửa thành công');
            }
            onSubmit(shouldRunOnSubmit);
        }
        setSubmitLoading(true);
    };

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const handleRemove = (file) => {
        setRemovedFiles([...removedFiles, file]);
        return true;
    };
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
                    <Col xs={12} md={8}>
                        <Form.Item name="name" label="Tên xe">
                            <Input variant="filled" />
                        </Form.Item>
                    </Col>
                    <Col xs={12} md={8}>
                        <Form.Item name="deposit" label="Đã cọc">
                            <Switch/>
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
                            <Select placeholder="Hộp số" variant="filled" disabled defaultValue="Số Sàn">
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
                    <Col xs={24}>
                        <Form.Item label="Ảnh hiển thị">
                            <Upload
                                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
                                onRemove={handleRemove}
                                beforeUpload={(file, FileList) => false}
                            >
                                <button
                                    style={{
                                        border: 0,
                                        background: 'none',
                                    }}
                                    type="button"
                                >
                                    <PlusOutlined />
                                    <div
                                        style={{
                                            marginTop: 8,
                                        }}
                                    >
                                        Upload
                                    </div>
                                </button>
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item style={{ marginBottom: 0 }}>
                    <Flex gap={15} justify="center">
                        <Button
                            loading={submitLoading}
                            type="primary"
                            htmlType="submit"
                            icon={data ? <EditFilled /> : <PlusOutlined />}
                            onClick={() => setShouldRunOnSubmit((prev) => true)}
                        >
                            {data ? 'Lưu' : 'Thêm'}
                        </Button>
                        {!data && (
                            <Button
                                loading={submitLoading}
                                color="default"
                                variant="outlined"
                                htmlType="submit"
                                icon={<PlusSquareOutlined />}
                            >
                                Thêm & tiếp tục
                            </Button>
                        )}
                    </Flex>
                </Form.Item>
            </Form>
            {previewImage && (
                <Image
                    wrapperStyle={{
                        display: 'none',
                    }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </div>
    );
}

export default CarDetailForm;
