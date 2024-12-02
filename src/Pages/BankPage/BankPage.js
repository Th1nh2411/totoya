import styles from './BankPage.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Button, Col, Flex, Row } from 'antd';
import { useContext, useEffect, useState } from 'react';
import commonServices from '../../services/commonServices';
import { goExport } from '../../utils';
import PageBanner from '../../components/PageBanner/PageBanner';
const cx = classNames.bind(styles);

function BankPage() {
    const handleExportLoanOptions = async () => {
        const res = await commonServices.exportLoanOptions();
        goExport(res, 'traditional_loan');
    };
    return (
        <div className={cx('wrapper')}>
            <PageBanner>NGÂN HÀNG</PageBanner>
            <div className={cx('content')}>
                <div style={{ fontSize: 18, lineHeight: 1.5, marginBottom: 40 }}>
                    <p>
                        Hiện tại đang được ưu đãi từ vay từ ngân hàng của Toyota là Ngân Hàng Tài Chính Toyota TFS với
                        chính sách vay đơn giản, chỉ chứng mua thu thập qua hình ảnh. Không mất phí phát sinh khi vay,
                        không mua sim số đẹp, không bảo hiểm khoản vay, không phí thậm định nhà cửa, không giới hạn tỉnh
                        thành. Không nợ xấu là 60% có cơ hội vay, 40% còn lại phụ thuộc vào điều kiện chứng minh thu
                        nhập (nhân viên kinh doanh sẽ hỗ trợ tốt nhất có thể).
                    </p>
                    <h2>Hiện TFS có 3 gói vay</h2>
                    <ul>
                        <li>
                            Gói vay truyền thống : trả gốc và lãi hàng tháng (giới hạn thấp nhất 1 năm cao nhất 7 năm)
                        </li>
                        <li>Gói vay 50/50: trả gốc + lãi 1 lần sau 1 năm vay.</li>
                        <li>Gói vay 50/50 plus: trả gốc sau 2 năm vay, lãi trả theo quý 3 tháng 1 lần.</li>
                    </ul>
                </div>
                <Flex gap={15} justify="center" wrap>
                    <Button size="large" type="primary">
                        <a
                            href="https://docs.google.com/spreadsheets/d/1k2IXmHe6NSSSyU1JIhi78BJjlUQ0SNFDfMUNIxyjEes/export?format=xlsx"
                            class="download-button"
                            download="file.xlsx"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            Vay truyền thống
                        </a>
                    </Button>
                    <Button size="large">
                        <a
                            href="/images/bank.jpg"
                            download="image.jpg"
                            style={{ color: 'black', textDecoration: 'none' }}
                        >
                            Vay 50/50
                        </a>
                    </Button>
                    <Button size="large">
                        <a
                            href="/images/bank.jpg"
                            download="image.jpg"
                            style={{ color: 'black', textDecoration: 'none' }}
                        >
                            Vay 50/50 plus
                        </a>
                    </Button>
                </Flex>
            </div>
        </div>
    );
}

export default BankPage;
