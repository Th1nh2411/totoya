import { Button, Flex, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './AdminPage.module.scss';
import classNames from 'classnames/bind';
// import { ADMIN_MOCKS } from './tableConfig';

import Search from 'antd/es/input/Search';
import { PlusOutlined, DeleteFilled, EditFilled } from '@ant-design/icons';
import customerServices from '../../services/customerServices';
import { userDefaultColumns } from './tableConfig';
const cx = classNames.bind(styles);

const AdminUser = () => {
    const [customerList, setCustomerList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getListData = async () => {
        setIsLoading(true);
        const res = await customerServices.getCustomer();
        if (res?.status === 'success') {
            setCustomerList(res.data);
        }
        setIsLoading(false);
    };
    useEffect(() => {
        getListData();
    }, []);
    return (
        <Flex vertical gap={10} style={{ height: '100%' }}>
            <div className={cx('content-wrapper')}>
                <Flex justify="space-between" gap={10} wrap>
                    <Search allowClear placeholder="Tìm kiếm" style={{ maxWidth: 300 }} />
                    <Flex gap={10}>
                        <Button icon={<PlusOutlined />} type="primary">
                            Thêm
                        </Button>
                        <Button icon={<DeleteFilled />} danger type="primary">
                            Xóa
                        </Button>
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
                            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                        },
                        fixed: 'left',
                    }}
                    columns={userDefaultColumns}
                    dataSource={customerList}
                />
            </div>
        </Flex>
    );
};
export default AdminUser;
