import { create } from "zustand";

const useFilterStore = create((set) => ({
  dateFrom: null,
  dateTo: null,
  categories: [],
  clearFilter: () => set({ dateFrom: null, dateTo: null, categories: [] }),
  setDateFrom: (dateFrom) => set({ dateFrom }),
  setDateTo: (dateTo) => set({ dateTo }),
  addCategory: (category) =>
    set((state) => ({ categories: [...state.categories, category] })),
  removeCategory: (category) =>
    set((state) => ({
      categories: state.categories.filter((c) => c !== category),
    })),
}));

export default useFilterStore;
