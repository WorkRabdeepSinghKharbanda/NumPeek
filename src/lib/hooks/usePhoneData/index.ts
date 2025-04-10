/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

export interface PHONE_DATA_TYPE {
    country: string;
    countryCallingCode: string;
    number: string;
    nationalNumber: string;
    startsAt: number;
    endsAt: number;
}

interface PhoneDataStore {
    phoneDataList: PHONE_DATA_TYPE[];
    addPhoneData: (phoneData: PHONE_DATA_TYPE) => void;
    resetPhoneData: () => void;
}

const usePhoneData = create<PhoneDataStore>((set) => ({
    phoneDataList: [],
    addPhoneData: (newPhoneData: PHONE_DATA_TYPE) => set((state) => ({ phoneDataList: [...state.phoneDataList, newPhoneData] })),
    resetPhoneData: () => set({ phoneDataList: [] }),
}));

export default usePhoneData;