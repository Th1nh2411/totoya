import { atom } from 'recoil';

export const costEstimateRegAtom = atom({
    key: 'costEstimateRegAtom',
    default: {
        visible: false,
        data: null,
        onSubmit: () => {},
    },
});
export const carDetailRegAtom = atom({
    key: 'carDetailRegAtom',
    default: {
        visible: false,
        data: null,
        onSubmit: () => {},
    },
});
export const authAtom = atom({
    key: 'authAtom',
    default: {
        isLoggedIn: true,
        user: null,
    },
});
