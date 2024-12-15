import { Modal } from 'antd';
import { useRecoilState } from 'recoil';
import CostEstimateForm from '../components/Forms/CostEstimateForm';
import { carDetailRegAtom, costEstimateRegAtom } from '../constant/atom';
import customerServices from '../services/customerServices';
import CarDetailForm from '../components/Forms/CarDetailForm';

const useModals = () => {
    const [costEstimateModal, setCostEstimateModal] = useRecoilState(costEstimateRegAtom);
    const [carDetailModal, setCarDetailModal] = useRecoilState(carDetailRegAtom);
    const handleSubmit = async (formData) => {
        customerServices.postCustomer({...formData, car_id:costEstimateModal.data});
        setCostEstimateModal({ ...costEstimateModal, visible: false });
    };

    const allModals = [
        {
            key: 'cost_estimate',
            content: (
                <Modal
                    styles={{ footer: { margin: 0 } }}
                    destroyOnClose
                    width={1000}
                    footer={false}
                    centered
                    open={costEstimateModal.visible}
                    onCancel={() => setCostEstimateModal({ visible: false })}
                >
                    <CostEstimateForm data={costEstimateModal.data} onSubmit={handleSubmit} />
                </Modal>
            ),
        },
        {
            key: 'car_detail',
            content: (
                <Modal
                    styles={{ footer: { margin: 0 } }}
                    destroyOnClose
                    width={1000}
                    footer={false}
                    centered
                    open={carDetailModal.visible}
                    onCancel={() => setCarDetailModal({ visible: false })}
                >
                    <CarDetailForm data={carDetailModal.data} onSubmit={carDetailModal.onSubmit} />
                </Modal>
            ),
        },
    ];
    return { allModals };
};
export default useModals;
