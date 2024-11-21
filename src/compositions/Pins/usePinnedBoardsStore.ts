import { create } from 'zustand'

interface PinnedBoardsState {
	pins: string[]
	pin: (stopdId: string) => void
	unpin: (stopId: string) => void,
	selectedPin: string | null
	setSelectedPin: (stopId: string) => void,
}

export const usePinnedBoardsStore = create<PinnedBoardsState>(set => ({
	pins: [],
	pin: (stopId) => set((state) => ({ pins: [...state.pins, stopId] })),
	unpin: (stopId) => set((state) => ({ pins: state.pins.filter(pin => pin !== stopId) })),
	selectedPin: null,
	setSelectedPin: (stopId) => set(() => ({ selectedPin: stopId })),
}))