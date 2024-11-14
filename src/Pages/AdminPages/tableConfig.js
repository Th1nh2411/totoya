import { Button, Flex, Image } from 'antd';
import dayjs from 'dayjs';
import { EditFilled, PlusOutlined } from '@ant-design/icons';

export const carDefaultColumns = [
    {
        title: 'Tên',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        fixed: 'left',
    },
    {
        title: 'Ảnh',
        dataIndex: 'images',
        render: (_, record) => (
            <Flex gap={8}>
                {record.images?.map((img) => (
                    <Image src={img} width={20} />
                ))}
            </Flex>
        ),
        minWidth: 80,
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
export const bannerDefaultColumns = [
    {
        title: 'ID',
        dataIndex: '_id',
        sorter: (a, b) => a.name.localeCompare(b.name),
        fixed: 'left',
    },
    {
        title: 'Ảnh',
        dataIndex: 'photo',
        render: (_, record) => <Image src={record.photo} width={20} />,
        minWidth: 80,
    },
    {
        title: 'Thứ tự',
        dataIndex: 'order',
        minWidth: 80,
    },
];
export const userDefaultColumns = [
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
            <Button type="link" href={`https://zalo.me/${customerPhone}`} target="_blank">
                {customerPhone}
            </Button>
        ),
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'createdAt',
        sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
        render: (createdAt) => dayjs(createdAt).format('DD/MM/YYYY'),
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
