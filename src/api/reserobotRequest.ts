const KEY = import.meta.env.VITE_RESROBOT_KEY
const URL = import.meta.env.VITE_RESROBOT_URL

export default async function reserobotRequest(
	action: string,
	params: Record<string, string | number | boolean | undefined | null>
) {
	const queryString = new URLQuery(params)
		.withAuth()
		.asJson()
		.buildString()

	const urlString = `${URL}${action}?${queryString}`

	return await fetch(urlString).then(res => res.json())
}

type QueryParams = Record<string, string | number | boolean | undefined | null>

class URLQuery {
	params: QueryParams

	constructor(params: QueryParams) {
		this.params = params
	}

	withAuth() {
		this.params.accessId = KEY
		return this
	}

	asJson() {
		this.params.format = 'json'
		return this
	}

	buildString(): string {
		const queryParams = new URLSearchParams()

		for (const [key, value] of Object.entries(this.params)) {

			if (value !== undefined && value !== null) {
				queryParams.append(key, String(value))
			}
		}

		return queryParams.toString()
	}
}