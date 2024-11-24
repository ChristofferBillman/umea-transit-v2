import { create } from 'zustand'

interface TripsState {
	from: string
	to: string
	fromString: string
	toString: string
	setFrom: (from: string) => void
	setTo: (to: string) => void
	setFromString: (fromString: string) => void
	setToString: (toString: string) => void
}

export const useTripsStore = create<TripsState>((set) => ({
	from: '',
	to: '',
	fromString: '',
	toString: '',
	setFrom: (from: string) => set(() => ({ from })),
	setTo: (to: string) => set(() => ({ to })),
	setFromString: (fromString: string) => set(() => ({ fromString })),
	setToString: (toString: string) => set(() => ({ toString }))
}))