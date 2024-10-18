import { useContext, useEffect, useState } from 'react';
import { Button, Flex, Form, Input, Typography, message } from 'antd';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import useUserActions from '../../hooks/useUserActions';
import config from '../../config';
import { LoadingOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;

function LoginPage() {
    const navigate = useNavigate();
    const { login } = useUserActions();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [form] = useForm();
    const onSubmit = async (formData) => {
        setIsLoading(true);
        try {
            const res = await login(formData);
            if (res?.success) {
                navigate(config.routes.admin);
                message.success('Login thành công');
            } else {
                form.setFields([
                    {
                        name: 'password',
                        errors: ['Sai mật khẩu, vui lòng thử lại!'],
                    },
                ]);
            }
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 532, margin: 'auto', height: '100vh' }}>
            <Flex style={{ height: '100%' }} align="center" justify="center" vertical>
                <Title style={{ color: 'var(--primary-color)', fontSize: 38 }}>Phước Dũng Toyota</Title>
                <Form
                    form={form}
                    labelCol={{
                        style: { fontWeight: 600 },
                    }}
                    size={'large'}
                    onFinish={onSubmit}
                    style={{ width: '100%', padding: '20px' }}
                >
                    <Flex justify="center" vertical>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tên đăng nhập!',
                                },
                            ]}
                            name="username"
                        >
                            <Input placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu!',
                                },
                            ]}
                            name="password"
                        >
                            <Input.Password
                                onChange={() => {
                                    if (error) setError('');
                                }}
                                placeholder="Mật khẩu"
                            />
                        </Form.Item>
                        <Button loading={isLoading} type="primary" style={{ marginTop: 10 }} htmlType="submit">
                            Đăng nhập
                        </Button>
                    </Flex>
                </Form>
            </Flex>
        </div>
    );
}

export default LoginPage;
