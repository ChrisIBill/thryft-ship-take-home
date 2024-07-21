import { create } from "zustand";

export interface IFormState {
  instagram: string;
  product: string;
  email: string;
  confirmEmail: string;
  firstName: string;
  lastName: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}
interface IFormSetStore {
  setInstagram: (instagram: string) => void;
  setProduct: (product: string) => void;
  setEmail: (email: string) => void;
  setConfirmEmail: (confirmEmail: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setAddress: (address: string) => void;
  setAddress2: (address2: string) => void;
  setCity: (city: string) => void;
  setState: (state: string) => void;
  setZip: (zip: string) => void;
}

export type IFormStore = IFormState & IFormSetStore;

export const useFormStore = create<IFormStore>((set) => ({
  instagram: "",
  product: "",
  email: "",
  confirmEmail: "",
  firstName: "",
  lastName: "",
  address: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  setInstagram: (instagram: string) => set({ instagram }),
  setProduct: (product: string) => set({ product }),
  setEmail: (email: string) => set({ email }),
  setConfirmEmail: (confirmEmail: string) => set({ confirmEmail }),
  setFirstName: (firstName: string) => set({ firstName }),
  setLastName: (lastName: string) => set({ lastName }),
  setAddress: (address: string) => set({ address }),
  setAddress2: (address2: string) => set({ address2 }),
  setCity: (city: string) => set({ city }),
  setState: (state: string) => set({ state }),
  setZip: (zip: string) => set({ zip }),
}));
