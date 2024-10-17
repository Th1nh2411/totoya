import Header from '../components/Header';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useContext, useEffect, useMemo, useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { BiArrowToTop } from 'react-icons/bi';
import { useLocation } from 'react-router';
import { ConfigProvider } from 'antd';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const currentPath = useLocation().pathname;

    return (
        <ConfigProvider
            theme={{
                token: { colorPrimary: '#eb1a2d' },
                components: { Typography: { titleMarginBottom: 0 }, Form: { itemMarginBottom: 15 } },
            }}
        >
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <div className={cx('content')}>{children}</div>
                </div>
                <Footer />
            </div>
        </ConfigProvider>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
