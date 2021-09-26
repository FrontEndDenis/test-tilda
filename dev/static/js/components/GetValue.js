export default class GetValue {
	async #getDataFetch() {
		const data = await fetch('https://store.tildacdn.com/api/tgetproduct/')
		return data
	}
	
	async getDataValue() {
		return await this.#getDataFetch()
	}
}