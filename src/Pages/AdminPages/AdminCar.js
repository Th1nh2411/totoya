import { Button, Flex, message, Popconfirm, Table } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './AdminPage.module.scss';
import classNames from 'classnames/bind';
import { ADMIN_MOCKS, carDefaultColumns } from './tableConfig';
import Search from 'antd/es/input/Search';
import { PlusOutlined, DeleteFilled, EditFilled } from '@ant-design/icons';
import carServices from '../../services/carServices';
import dayjs from 'dayjs';
import { useSetRecoilState } from 'recoil';
import { carDetailRegAtom } from '../../constant/atom';
const cx = classNames.bind(styles);

const AdminCar = () => {
    const [listData, setListData] = useState([]);
    const setCarDetailModal = useSetRecoilState(carDetailRegAtom);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedRowIds, setSelectedRowIds] = useState([]);
    const [searchText, setSearchText] = useState('');
    const getListData = async () => {
        setIsLoading(true);
        const res = await carServices.getCars();
        if (res?.status === 'success') {
            setListData(res.data);
        }
        setIsLoading(false);
    };
    useEffect(() => {
        getListData();
    }, []);
    const filteredList = useMemo(
        () => listData?.filter((item) => item.name?.toUpperCase().includes(searchText.toUpperCase())),
        [listData, searchText],
    );
    const handleDeleteCars = async () => {
        const res = await carServices.deleteCars({ ids: selectedRowIds });
        if (res?.status === 'success') {
            message.success('Xóa thành công');
            getListData();
            setSelectedRowIds([]);
        }
    };
    const columns = [
        ...carDefaultColumns,
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Button
                    icon={<EditFilled />}
                    size="small"
                    color="default"
                    variant="solid"
                    onClick={() =>
                        setCarDetailModal({
                            visible: true,
                            onSubmit: (closeModal) => {
                                if (closeModal) setCarDetailModal({ visible: false });
                                getListData();
                            },
                            data: record,
                        })
                    }
                >
                    Sửa
                </Button>
            ),
            fixed: 'right',
            width: 100,
        },
    ];
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
                        <Button
                            icon={<PlusOutlined />}
                            type="primary"
                            onClick={() =>
                                setCarDetailModal({
                                    visible: true,
                                    onSubmit: (closeModal) => {
                                        if (closeModal) setCarDetailModal({ visible: false });
                                        getListData();
                                    },
                                })
                            }
                        >
                            Thêm
                        </Button>
                        <Popconfirm title="Chắc chắn xóa?" cancelText="Hủy" onConfirm={handleDeleteCars}>
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
                    dataSource={filteredList}
                />
            </div>
        </Flex>
    );
};
export default AdminCar;
