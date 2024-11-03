import { Button, Flex, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './AdminPage.module.scss';
import classNames from 'classnames/bind';
// import { ADMIN_MOCKS } from './tableConfig';

import Search from 'antd/es/input/Search';
import { PlusOutlined, DeleteFilled, EditFilled } from '@ant-design/icons';
import customerServices from '../../services/customerServices';
import moment from 'moment/moment';
const cx = classNames.bind(styles);
const columns = [
    {
        title: 'Hộ khẩu',
        dataIndex: 'model',
        sorter: (a, b) => a.model.localeCompare(b.model),
    },
    {
        title: 'Màu biển',
        dataIndex: 'plateColor',
        sorter: (a, b) => a.plateColor.localeCompare(b.plateColor),
    },
    {
        title: 'Trả trước',
        dataIndex: 'prepaid',
        sorter: (a, b) => a.prepaid - b.prepaid,
    },
    {
        title: 'Vay',
        dataIndex: 'loan',
        sorter: (a, b) => a.loan - b.loan,
    },
    {
        title: 'Thời gian vay',
        dataIndex: 'loanTime',
        sorter: (a, b) => a.loanTime.localeCompare(b.loanTime),
    },
    {
        title: 'Gói vay',
        dataIndex: 'loanType',
        // sorter: (a, b) => a.loanType.localeCompare(b.loanType),
    },
    {
        title: 'Tên khách hàng',
        dataIndex: 'customerName',
        sorter: (a, b) => a.customerName.localeCompare(b.customerName),
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'customerPhone',
        // sorter: (a, b) => a.address.localeCompare(b.address),
        render: (customerPhone) => (
            <Button
                type="link"
                href={`https://zalo.me/${customerPhone}`}
                target="_blank"
            >
                {customerPhone}
            </Button>
        ),
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'createdAt',
        sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
        render: (createdAt) => moment(createdAt).format('DD/MM/YYYY'),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Button icon={<EditFilled />} size="small" type="primary" style={{ backgroundColor: '#555' }}>
                Chỉnh sửa
            </Button>
        ),
        width: 150,
    },
];

const AdminUser = () => {
    const [customerList, setSustomerList] = useState([]);
    const getListData = async () => {
        const res = await customerServices.getCustomer();
        if (res?.status === 'success') {
            setSustomerList(res.data);
        }
    };
    useEffect(() => {
        getListData();
    }, []);
    return (
        <Flex vertical gap={10} style={{ height: '100%' }}>
            <div className={cx('content-wrapper')}>
                <Flex justify="space-between">
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
                    bordered
                    rowSelection={{
                        type: 'checkbox',
                        onChange: (selectedRowKeys, selectedRows) => {
                            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                        },
                        getCheckboxProps: (record) => ({
                            name: record.name,
                        }),
                        fixed: 'left',
                    }}
                    columns={columns}
                    dataSource={customerList}
                    pagination={false}
                    scroll={{
                        x: 'max-content',
                        y: 55 * 13,
                    }}
                />
            </div>
        </Flex>
    );
};
export default AdminUser;
