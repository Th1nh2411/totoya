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
        title: 'Màu',
        dataIndex: 'color',
        sorter: (a, b) => a.color.localeCompare(b.color),
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'createdAt',
        sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
    {
        title: 'Giảm giá',
        dataIndex: 'discount',
        sorter: (a, b) => parseInt(a.discount) - parseInt(b.discount),
    },
    {
        title: 'Động cơ',
        dataIndex: 'engine',
        sorter: (a, b) => a.engine - b.engine,
    },
    {
        title: 'Nhiên liệu',
        dataIndex: 'fuel',
        sorter: (a, b) => a.fuel.localeCompare(b.fuel),
    },
    {
        title: 'Hộp số',
        dataIndex: 'gearbox',
        sorter: (a, b) => a.gearbox.localeCompare(b.gearbox),
    },
    {
        title: 'Vị trí',
        dataIndex: 'location',
        sorter: (a, b) => a.location.localeCompare(b.location),
    },
    {
        title: 'Số KM đã đi',
        dataIndex: 'mileage',
        sorter: (a, b) => a.mileage - b.mileage,
    },
    {
        title: 'Giá',
        dataIndex: 'price',
        sorter: (a, b) => parseInt(a.price) - parseInt(b.price),
    },
    {
        title: 'Số ghế',
        dataIndex: 'seats',
        sorter: (a, b) => a.seats - b.seats,
    },
    {
        title: 'Năm sản xuất',
        dataIndex: 'year',
        sorter: (a, b) => a.year - b.year,
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
                    sticky
                    scroll={{
                        x: 'max-content',
                        y: 55 * 5,
                    }}
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
                    dataSource={listData}
                    pagination={false}
                />
            </div>
        </Flex>
    );
};
export default AdminCar;
