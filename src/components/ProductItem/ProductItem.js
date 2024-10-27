import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import styles from './ProductItem.module.scss';
import Image from '../Image';
import images from '../../assets/images';
import { useNavigate } from 'react-router';
import Text from 'antd/es/typography/Text';
const cx = classNames.bind(styles);

function ProductItem({ data = {} }) {
    const navigate = useNavigate();
    const [hoveredProduct, setHoveredProduct] = useState(false);
    return (
        <div onClick={() => navigate(`/usedCar/${data._id}`)}>
            <div
                className={cx('product-img-wrapper')}
                onMouseOver={() => setHoveredProduct(true)}
                onMouseOut={() => setHoveredProduct(false)}
            >
                <Image
                    src={data.images[1]}
                    className={cx('product-img')}
                    style={{ opacity: !hoveredProduct ? 0 : 1 }}
                />
                <Image src={data.images[0]} className={cx('product-img')} style={{ opacity: hoveredProduct ? 0 : 1 }} />
                {data.deposit ? (
                    <Image src={images.deposit} className={cx('product-deposit')} />
                ) : (
                    <>
                        <Text className={cx('product-price')}>Giá: {data.price}</Text>
                        {data.discount && <Text className={cx('product-discount')}>Giảm: {data.discount}</Text>}
                    </>
                )}
            </div>
            <h3 className={cx('product-name')}>{data.name}</h3>
        </div>
    );
}

export default ProductItem;
