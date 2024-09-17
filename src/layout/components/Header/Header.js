import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import config from '../../../config';
import { useContext, useEffect, useRef, useState } from 'react';
import LocalStorageManager from '../../../utils/LocalStorageManager';

import { StoreContext, actions } from '../../../store';
import { Button, Flex, Input } from 'antd';
import { MdOutlineClose, MdOutlineMenu, MdSearch } from 'react-icons/md';
import Text from 'antd/es/typography/Text';
import { HOTLINE } from '../../../constant';
const cx = classNames.bind(styles);

function Header() {
    const localStorageManager = LocalStorageManager.getInstance();
    const [showMenuMb, setShowMenuMb] = useState(false);
    const [searchValue, setSearchVale] = useState('');
    const overlayRef = useRef();
    const handleDocumentClick = (event) => {
        if (overlayRef.current && overlayRef.current.contains(event.target)) {
            setShowMenuMb(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const handleShowMenuMb = () => {
        setShowMenuMb(!showMenuMb);
    };
    const handleCloseMenuMb = () => {
        setShowMenuMb(false);
    };
    return (
        <>
            <header className={cx('wrapper', { active: showMenuMb })}>
                <div
                    className={cx('inner')}
                    style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid #f0f0f0', flex: 1 }}
                >
                    <div className={cx('top-header-wrapper')}>
                        <div className={cx('logo-wrapper')}>
                            <Link to={config.routes.home}>
                                <img src={images.mainLogo} className={cx('logo')} alt="logo" />
                            </Link>
                            <MdOutlineClose onClick={handleCloseMenuMb} className={cx('close-btn-mb')} />
                        </div>
                        <div className={cx('sub-wrapper')}>
                            <Flex vertical align="center">
                                <Text style={{ color: 'var(--primary-color)', fontWeight: 600 }}>{HOTLINE}</Text>
                                <Text style={{ fontSize: 12 }}>(Hotline)</Text>
                            </Flex>
                            <div className={cx('sub-img-wrapper')}>
                                <Image src={images.subLogo} alt="sub" className={cx('sub-img')} />
                            </div>
                        </div>
                        <Input
                            className={cx('search')}
                            suffix={<MdSearch />}
                            value={searchValue}
                            onChange={(e) => setSearchVale(e.target.value)}
                            placeholder="Tìm kiếm khoá học"
                        />
                    </div>
                </div>
                <div className={cx('inner')} style={{ paddingBlock: 8 }}>
                    <div className={cx('side-group')}>
                        <nav className={cx('header-nav')}>
                            <NavLink
                                onClick={handleCloseMenuMb}
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.aboutUs}
                            >
                                Giới thiệu
                            </NavLink>
                            <NavLink
                                onClick={handleCloseMenuMb}
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.usedCar}
                            >
                                Xe đã qua sử dụng
                            </NavLink>
                            <NavLink
                                onClick={handleCloseMenuMb}
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.banking}
                            >
                                Ngân hàng
                            </NavLink>
                            <NavLink
                                onClick={handleCloseMenuMb}
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.utility}
                            >
                                Tiện ích
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </header>
            <div ref={overlayRef} className={cx('menu-modal-overlay', { active: showMenuMb })}></div>
            <MdOutlineMenu onClick={handleShowMenuMb} className={cx('show-menu-mb')} />
        </>
    );
}

export default Header;
