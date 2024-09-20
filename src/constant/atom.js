import { atom } from 'recoil';

export const costEstimateRegAtom = atom({
    key: 'costEstimateRegAtom',
    default: {
        visible: false,
        data: null,
        onSubmit: () => {},
    },
});
