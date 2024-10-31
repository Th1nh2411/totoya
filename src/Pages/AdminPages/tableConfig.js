import { Button } from 'antd';
import dayjs from 'dayjs';

export const carDefaultColumns = [
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
        render: (rowData) => dayjs(rowData).format('YYYY-MM-DD HH:mm'),
    },
    {
        title: 'Giảm giá',
        dataIndex: 'discount',
        sorter: (a, b) => parseInt(a.discount) - parseInt(b.discount),
        minWidth: 110,
    },
    {
        title: 'Động cơ',
        dataIndex: 'engine',
        sorter: (a, b) => a.engine - b.engine,
        minWidth: 110,
    },
    {
        title: 'Nhiên liệu',
        dataIndex: 'fuel',
        sorter: (a, b) => a.fuel.localeCompare(b.fuel),
        minWidth: 120,
    },
    {
        title: 'Hộp số',
        dataIndex: 'gearbox',
        sorter: (a, b) => a.gearbox.localeCompare(b.gearbox),
        minWidth: 100,
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
        minWidth: 130,
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
        minWidth: 100,
    },
    {
        title: 'Năm SX',
        dataIndex: 'year',
        sorter: (a, b) => a.year - b.year,
    },
];

export const ADMIN_MOCKS = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
];
