import styles from './UtilityPage.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { useContext, useEffect, useState } from 'react';
import commonServices from '../../services/commonServices';
import Text from 'antd/es/typography/Text';
import { fetchMetaData } from '../../utils';
const cx = classNames.bind(styles);

function UtilityItem({ url }) {
    const [metaData, setMetaData] = useState({ title: '', description: '', image: '' });
    useEffect(() => {
        if (url) {
            const handleFetchMetaData = async () => {
                const result = await fetchMetaData(url);
                setMetaData(result);
            };
            handleFetchMetaData();
        }
    }, [url]);

    return (
        <div className={cx('wrapper')}>
            <Image src={metaData.image} alt="Utility-img" />
        </div>
    );
}

export default UtilityItem;
