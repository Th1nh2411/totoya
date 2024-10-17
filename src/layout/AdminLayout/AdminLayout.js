import React from 'react';
import { AppstoreOutlined, UserOutlined, CarFilled } from '@ant-design/icons';
import { Button, ConfigProvider, Flex, Image, Layout, Menu, theme } from 'antd';
import images from '../../assets/images';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import { IoLogOut } from 'react-icons/io5';
import config from '../../config';
import { useLocation, useNavigate } from 'react-router';
import useUserActions from '../../hooks/useUserActions';
const { Header, Content, Footer, Sider } = Layout;
const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
};

const AdminLayout = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { logout } = useUserActions();
    const items = [
        { title: 'Quản lý xe', href: config.routes.carAdmin, icon: CarFilled },
        { title: 'Quản lý user', href: config.routes.userAdmin, icon: UserOutlined },
        { title: 'Quản lý banner', href: config.routes.bannerAdmin, icon: AppstoreOutlined },
    ].map((item, index) => ({
        key: item.href,
        icon: React.createElement(item.icon),
        label: item.title,
        onClick: () => navigate(item.href),
    }));
    return (
        <ConfigProvider theme={{ components: { Typography: { titleMarginBottom: 0 } } }}>
            <Layout hasSider>
                <Sider style={siderStyle}>
                    <Image preview={false} src={images.mainLogo} style={{ padding: 20 }} />
                    <Menu theme="dark" mode="inline" selectedKeys={pathname} items={items} />
                </Sider>
                <Layout
                    style={{
                        marginInlineStart: 200,
                    }}
                >
                    <Header
                        style={{
                            padding: '0 20px',
                            background: colorBgContainer,
                        }}
                    >
                        <Flex align="center" justify="space-between" style={{ height: '100%' }}>
                            <Title level={3}>Trang quản lý Website </Title>
                            <Button onClick={logout} type="text" icon={<IoLogOut fontSize={20} />} iconPosition="end">
                                Đăng xuất
                            </Button>
                        </Flex>
                    </Header>
                    <Content
                        style={{
                            minHeight: '100vh',
                            margin: '24px 16px 0',
                            overflow: 'initial',
                            backgroundColor: 'white',
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        ©{new Date().getFullYear()} Created by R1n
                    </Footer>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};
export default AdminLayout;
