import { create } from 'zustand'

interface TripsState {
	from: string
	to: string
	setFrom: (from: string) => void
	setTo: (t0: string) => void
}

export const useTripsStore = create<TripsState>(set => ({
	from: '',
	to: '',
	setFrom: from => set(() => ({ from })),
	setTo: to => set(() => ({ to }))
}))