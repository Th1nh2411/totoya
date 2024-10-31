import { Button, Flex, Table } from 'antd';
import React, { useEffect, useState } from 'react';
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
    useEffect(() => {
        const getListData = async () => {
            const res = await carServices.getCars();
            if (res?.status === 'success') {
                setListData(res.data);
            }
        };
        getListData();
    }, []);
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
                    onClick={() => setCarDetailModal({ visible: true, onSubmit: () => {}, data: record })}
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
                <Flex justify="space-between">
                    <Search allowClear placeholder="Tìm kiếm" style={{ maxWidth: 300 }} />
                    <Flex gap={10}>
                        <Button
                            icon={<PlusOutlined />}
                            type="primary"
                            onClick={() => setCarDetailModal({ visible: true, onSubmit: () => {} })}
                        >
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
                    tableLayout="auto"
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
