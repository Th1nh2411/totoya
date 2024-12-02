import classNames from 'classnames/bind';
import styles from './PageBanner.module.scss';
import Text from 'antd/es/typography/Text';
const cx = classNames.bind(styles);

export function PageBanner({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default PageBanner;
