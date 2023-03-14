class GitHub {
	constructor() {
		this.client_id = '1b84a05aa975fc69cef4'
		this.client_secret = 'b11e34cb89a28afd0f305d5bc637f5efe996c2d3'
		this.repos_count = 5
		this.repos_sort = 'created: asc'
	}
	async getUser(username) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		)

		const repoResponse = await fetch(
			`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
		)

		const profile = await profileResponse.json()
		const repos = await repoResponse.json()

		return {
			profile,
			repos,
		}
	}
}
