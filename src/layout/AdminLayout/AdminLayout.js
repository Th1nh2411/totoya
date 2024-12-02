import React from 'react';
import { AppstoreOutlined, UserOutlined, CarFilled, LinkOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Divider, Flex, Image, Layout, Menu, theme } from 'antd';
import images from '../../assets/images';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import { IoLogOut } from 'react-icons/io5';
import config from '../../config';
import { useLocation, useNavigate } from 'react-router';
import useUserActions from '../../hooks/useUserActions';
import Link from 'antd/es/typography/Link';
import styles from './AdminLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const { Header, Content, Footer, Sider } = Layout;
const siderStyle = {
    overflow: 'auto',
    // position: 'fixed',
    minHeight: '100vh',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
    padding: 10,
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
        icon: React.createElement(item.icon, { style: { fontSize: 18 } }),
        label: item.title,
        onClick: () => navigate(item.href),
    }));
    return (
        <ConfigProvider
            theme={{
                components: { Typography: { titleMarginBottom: 0 }, Menu: { itemHeight: 50, itemMarginBlock: 10 } },
            }}
        >
            <Layout hasSider>
                <Sider style={siderStyle} breakpoint={'xl'} width={250}>
                    <div style={{ padding: 10 }}>
                        <Image preview={false} src={images.mainLogo} style={{ borderRadius: 5 }} />
                    </div>
                    <Divider style={{ borderColor: '#4b4b4b', marginBlock: 10 }} />
                    <Menu theme="dark" mode="inline" selectedKeys={pathname} items={items} style={{ fontSize: 18 }} />
                </Sider>
                <Layout style={{}}>
                    <Header
                        style={{
                            padding: '0 20px',
                            background: colorBgContainer,
                            height: 64,
                        }}
                    >
                        <Flex align="center" justify="space-between" style={{ height: '100%' }}>
                            <Flex align="center" gap={10} className={cx('hide-md')}>
                                <Title level={3}>Trang quản lý Website </Title>-
                                <Button type="link" href="/" target="_blank" icon={<LinkOutlined />}>
                                    Phước Dũng Toyota
                                </Button>
                            </Flex>
                            <Button onClick={logout} type="text" icon={<IoLogOut fontSize={20} />} iconPosition="end">
                                Đăng xuất
                            </Button>
                        </Flex>
                    </Header>
                    <Content
                        style={{
                            margin: 16,
                            maxHeight: 'calc(100vh - 64px - 32px)',
                            overflow: 'scroll',
                            // backgroundColor: 'white',
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};
export default AdminLayout;
