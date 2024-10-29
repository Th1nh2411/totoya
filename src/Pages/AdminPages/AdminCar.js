import { Button, Flex, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './AdminPage.module.scss';
import classNames from 'classnames/bind';
import { ADMIN_MOCKS } from './_mocks';
import Search from 'antd/es/input/Search';
import { PlusOutlined, DeleteFilled, EditFilled } from '@ant-design/icons';
import carServices from '../../services/carServices';
const cx = classNames.bind(styles);
const columns = [
    {
        title: 'Tên',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
        title: 'Tuổi',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        sorter: (a, b) => a.address.localeCompare(b.address),
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

const AdminCar = () => {
    const [listData, setListData] = useState([]);
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            name: record.name,
        }),
    };
    useEffect(() => {
        const getListData = async () => {
            const res = await carServices.getCars();
            if (res?.status === 'success') {
                setListData(res.data);
            }
        };
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
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={ADMIN_MOCKS}
                    pagination={false}
                    scroll={{
                        y: 55 * 12,
                    }}
                />
            </div>
        </Flex>
    );
};
export default AdminCar;
