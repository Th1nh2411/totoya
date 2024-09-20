import styles from './AboutUsPage.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Col, Flex, Row } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { StoreContext, actions } from '../../store';
const cx = classNames.bind(styles);

function AboutUsPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-section')}>
                <div className={cx('banner-content')}>
                    GIỚI THIỆU
                    <br /> CÔNG TY
                </div>
            </div>
            <Col xs={24} sm={20} lg={18} style={{ margin: '30px auto' }}>
                <Flex vertical gap={10}>
                    <h1 style={{ fontSize: 30, fontWeight: 600 }}>Phước Dũng Toyota Rạch Chiếc</h1>
                    <div style={{ fontSize: 18, lineHeight: 1.5 }}>
                        <p>
                            <strong>Uy tín tạo niềm tin,</strong> với phương châm là “
                            <strong>không chạy theo về giá</strong>, không bán hàng bằng mọi giá, không bất chấp tất cả
                            để bán hàng”
                        </p>
                        <p>
                            Với mong muốn mang đến cho khách hàng những chiếc xe chất lượng{' '}
                            <strong>chứ không phải giá cao</strong>, những chiếc xe có{' '}
                            <strong>rủi ro thấp nhất chứ không phải giá thấp</strong>. Vì vậy mà hầu hết khách hàng sau
                            khi mua và sử dụng, dịch vụ của em đều hài lòng và muốn quay lại.
                        </p>
                        <p>
                            Chuyên mua bán xe cũ mới của <strong>Toyota</strong>. Thu mua xe cũ{' '}
                            <strong>giá cạnh tranh</strong>, mua tất cá các hãng, ưu tiên Toyota.
                        </p>
                        <p>
                            Bán xe Toyota mới với nhiều chính sách khuyến mãi <strong>tốt nhất</strong>. Thu mua xe cũ
                            tại nhà, bảo mật thông tin, <strong>nhanh chóng</strong>, tất toán ngân hàng,{' '}
                            <strong>thu hồi định danh biển số.</strong>
                        </p>
                        <p>
                            <strong>
                                Vì sao giá bán của hãng Toyota luôn cao hơn so với thị trường chung nhưng tổng chi phí
                                luôn thấp nhất?
                            </strong>
                        </p>
                        <p>
                            <strong>
                                Tổng chi phí = Chi phí đầu từ + Chi phí vận hành + Chi phí rủi ro + Chi phí cơ hội
                            </strong>
                        </p>
                        <ul>
                            <li>
                                <strong>Chi phí đầu tư ban đầu:</strong> Hầu hết ai cũng chỉ để ý đến chi phí cái giá
                                ban đầu, đó chính là giá bán mà khách hàng phải trả cho người bán. Đây là 1 điều khá sai
                                lầm của rất nhiều người khi đi mua hàng, vì chi phí cho 1 sản phẩm nó còn bao gồm những
                                chi phí vô hình và hữu hình nữa.
                            </li>
                            <li>
                                <strong>Chi phí vận hành:</strong> Khi một chiếc xe đã được kiểm tra, thay thế sửa chửa,
                                bảo dưỡng đều thì việc vận hành, sử dụng sau này thì chi phí bảo dưỡng thay thế sẽ tiết
                                kiệm và thấp hơn
                            </li>
                            <li>
                                <strong>Chi phí rủi ro:</strong> Khi xe hư thì phải sửa chữa, trường hợp hư hỏng nặng có
                                thể ảnh hưởng đến người và của, khi xe đã được kiểm tra và bảo dưỡng thường xuyên thì
                                việc hư hỏng rất khó xảy ra, ngoài ra khi mua xe còn được bảo hành chính hãng hoặc bảo
                                hành động cơ và hộp số.
                            </li>
                            <li>
                                <strong>Chi phí cơ hội:</strong> Khi muốn bán xe hoặc đổi xe thì việc đánh giá nguồn gốc
                                rất quan trọng, việc bán lại xe nếu biết nguồn gốc xe mua trong hãng và bảo dưỡng đầy đủ
                                sẽ giúp người mua sau này yên tâm hơn. Việc bán lại hoặc đổi xe thì sẽ được cân đối giá
                                cả tốt hơn, ưu tiên hơn .
                            </li>
                        </ul>
                        <p>
                            Trường hợp chất lượng ngang nhau mà giá bán giá thấp hơn thì lấy đâu ra chi phí để trả
                            lương, bảo hiểm, tiền thuê mặt bằng mặt bằng…để có thể đảm bảo các dịch vụ khác cho khách
                            hàng 1 cách tốt nhất và liên tục sau bán hàng <strong>(“Hậu mãi”)</strong>.<br />
                            Đó là lý do tại sao GIÁ BÁN CAO nhưng TỔNG CHI PHÍ LÀ THẤT NHẤT.
                        </p>
                        <p>
                            <strong>Địa chỉ:</strong> 507 Võ Nguyên Giáp, Phường An Phú, TP.Thủ Đức, TP.HCM
                            <br />
                            <strong>Hotline:</strong> 0981061517
                        </p>
                    </div>
                </Flex>
            </Col>
            {/* map SECTION */}
            <section className={cx('map-section')}>
                <div style={{ paddingInline: 10 }}>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.015678301439!2d106.7530110760889!3d10.810110789340701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a7025f78a95%3A0x594f755a61361da7!2zVG95b3RhIMSQw7RuZyBTw6BpIEfDsm4!5e0!3m2!1sen!2sus!4v1726554285548!5m2!1sen!2sus"
                        width="100%"
                        height="500"
                        loading="lazy"
                        style={{ border: 0 }}
                    ></iframe>
                </div>
            </section>
        </div>
    );
}

export default AboutUsPage;
