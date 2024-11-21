import { create } from 'zustand'

interface SelectedStopState {
	selectedStop: string | null
	setSelectedStop: (newSelectedStop: string | null) => void
}
export const useSelectedStopStore = create<SelectedStopState>(set => ({
	selectedStop: null,
	setSelectedStop: newSelectedStop => set(() => ({ selectedStop: newSelectedStop }))
}))