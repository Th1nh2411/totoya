import { Modal } from 'antd';
import { useRecoilState } from 'recoil';
import CostEstimateForm from '../components/Forms/CostEstimateForm';
import { costEstimateRegAtom } from '../constant/atom';

const useModals = () => {
    const [costEstimateModal, setCostEstimateModal] = useRecoilState(costEstimateRegAtom);
    const allModals = [
        {
            key: 'counsel_register',
            content: (
                <Modal
                    destroyOnClose
                    width={1000}
                    footer={false}
                    centered
                    open={costEstimateModal.visible}
                    onCancel={() => setCostEstimateModal({ visible: false })}
                >
                    <CostEstimateForm data={costEstimateModal.data} onSubmit={costEstimateModal.onSubmit} />
                </Modal>
            ),
        },
    ];
    return { allModals };
};
export default useModals;
