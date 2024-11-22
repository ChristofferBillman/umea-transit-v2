import { Stop } from 'api/useStop'
import { create } from 'zustand'

interface PinnedBoardsState {
	pins: Stop[]
	pin: (stop: Stop) => void
	unpin: (stopId: string) => void,
	selectedPin: Stop | null
	setSelectedPin: (stopId: string) => void,
	open: boolean,
	setOpen: (open: boolean) => void
}

export const usePinnedBoardsStore = create<PinnedBoardsState>(set => ({
	pins: [],
	pin: (stop) => set((state) => (
		{ pins: [...state.pins, stop] }
	)),
	unpin: (stopId) => set((state) => (
		{ pins: state.pins.filter(stop => stop.id !== stopId) }
	)),
	selectedPin: null,
	setSelectedPin: (stopId) => set(state => (
		{ selectedPin: state.pins.find(stop => stop.id === stopId) }
	)),
	open: false,
	setOpen: open => set(() => (
		{ open }
	))
}))