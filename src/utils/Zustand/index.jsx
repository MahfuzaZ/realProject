import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useMode = create(
    persist(
        (set, get) => ({
        mode: 'light',
        lang: 'uz',
        changeMode:  () => set(() => ({mode: get().mode == 'light' ? 'dark' : 'light'})),

    }),
    {name: 'mode'}
    
    )
)
