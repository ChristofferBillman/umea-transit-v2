export default function formatTimeDifference(startTime: string, endTime: string) {
	const [startHours, startMinutes] = startTime.split(':').map(Number)
	const [endHours, endMinutes] = endTime.split(':').map(Number)

	const startInMinutes = startHours * 60 + startMinutes
	const endInMinutes = endHours * 60 + endMinutes

	let differenceInMinutes = endInMinutes - startInMinutes

	if (differenceInMinutes < 0) {
		differenceInMinutes += 24 * 60
	}

	if (differenceInMinutes < 60) return differenceInMinutes + 'min'

	const remainingMinutes = differenceInMinutes % 60
	const hours = Math.floor(differenceInMinutes / 24)

	return hours + 'h, ' + remainingMinutes + 'min'
}
