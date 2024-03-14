import { create } from 'zustand'

interface CursorState {
  hovered: boolean
  setHovered: (hovered: boolean) => void

  position: { x: number; y: number }
  setPosition: (position: { x: number; y: number }) => void
}

export const useCursorStore = create<CursorState>()((set) => ({
  hovered: false,
  setHovered: (hovered) => set({ hovered }),
  position: { x: 0, y: 0 },
  setPosition: (position) => set({ position }),
}))
