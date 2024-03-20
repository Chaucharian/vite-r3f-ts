import { create } from 'zustand'
import { modelColors } from '../mock/modelColors'

export const useSceneStore = create((set) => {
  return {
    autoRotate: true,
    color: modelColors[0],
    toggleAutoRotate: () => set((state: any) => ({ autoRotate: !state.autoRotate })),
    changeColor: (color: any) => set((state: any) => ({ color })),
  }
})
