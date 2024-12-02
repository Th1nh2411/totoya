import { Button, Flex, message, Popconfirm, Table, Upload } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './AdminPage.module.scss';
import classNames from 'classnames/bind';
import { ADMIN_MOCKS, bannerDefaultColumns } from './tableConfig';
import Search from 'antd/es/input/Search';
import { PlusOutlined, DeleteFilled, EditFilled } from '@ant-design/icons';
import dayjs from 'dayjs';
import { useSetRecoilState } from 'recoil';
import bannerServices from '../../services/bannerServices';
const cx = classNames.bind(styles);

const AdminBanner = () => {
    const [listData, setListData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedRowIds, setSelectedRowIds] = useState([]);
    const [searchText, setSearchText] = useState('');
    const getListData = async () => {
        setIsLoading(true);
        const res = await bannerServices.getBanners();
        if (res?.status === 'success') {
            setListData(res.data);
        }
        setIsLoading(false);
    };
    useEffect(() => {
        getListData();
    }, []);

    const handleDeleteBanners = async () => {
        const res = await bannerServices.deleteBanners({ ids: selectedRowIds });
        if (res?.status === 'success') {
            message.success('Xóa thành công');
            getListData();
            setSelectedRowIds([]);
        }
    };
    const columns = [...bannerDefaultColumns];
    const handleAddBanner = async (file) => {
        const formData = new FormData();
        formData.append('photo', file);
        const res = await bannerServices.createBanner(formData);
        if (res?.status === 'success') {
            message.success('Thêm thành công');
            getListData();
            setSelectedRowIds([]);
        }
    };
    return (
        <Flex vertical gap={10} style={{ height: '100%' }}>
            <div className={cx('content-wrapper')}>
                <Flex justify="space-between" gap={10} wrap>
                    <Search
                        allowClear
                        placeholder="Tìm kiếm"
                        style={{ maxWidth: 300 }}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Flex gap={10}>
                        <Upload
                            fileList={[]}
                            onChange={({ file }) => handleAddBanner(file)}
                            beforeUpload={(file, FileList) => false}
                        >
                            <Button icon={<PlusOutlined />} type="primary" onClick={() => {}}>
                                Thêm
                            </Button>
                        </Upload>
                        <Popconfirm title="Chắc chắn xóa?" cancelText="Hủy" onConfirm={handleDeleteBanners}>
                            <Button
                                icon={<DeleteFilled />}
                                danger
                                type="primary"
                                disabled={selectedRowIds?.length === 0}
                            >
                                Xóa
                            </Button>
                        </Popconfirm>
                    </Flex>
                </Flex>
            </div>
            <div className={cx('content-wrapper')} style={{ flex: 1 }}>
                <Table
                    rowKey="_id"
                    tableLayout="auto"
                    sticky
                    scroll={{
                        x: 'max-content',
                        y: 55 * 5,
                    }}
                    pagination={false}
                    bordered
                    loading={isLoading}
                    rowSelection={{
                        type: 'checkbox',
                        onChange: (selectedRowKeys, selectedRows) => {
                            setSelectedRowIds(selectedRowKeys);
                        },
                        fixed: 'left',
                    }}
                    columns={columns}
                    dataSource={listData}
                />
            </div>
        </Flex>
    );
};
export default AdminBanner;
