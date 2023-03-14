class UI {
	constructor() {
		this.profile = document.querySelector('.profile')
	}

	showProfile(user) {
		this.profile.innerHTML = `
    <div class="container">
					<div class="profile-body">
						<div class="profile-data">
							<img class="profile-data__img" src="${user.avatar_url}" alt="" />
							<a href="${user.html_url}" class="profile-data__btn">View Profile</a>
						</div>

						<div class="profile-info">
							<div class="profile-info-header">
								<ul class="profile-info-header__list">
									<li class="profile-info-header__item item blue">
										Public Repos:${user.public_repos}
									</li>
									<li class="profile-info-header__item item grey">
										Public Gits:${user.public_gists}
									</li>
									<li class="profile-info-header__item item green">
										Followers:${user.followers}
									</li>
									<li class="profile-info-header__item item aqua">
										Following:${user.following}
									</li>
								</ul>
							</div>
							<div class="profile-info-footer">
								<ul class="profile-info-footer__list">
									<li class="profile-info-footer__item">Company: ${user.company}</li>
									<li class="profile-info-footer__item">Website/blog: ${user.blog}</li>
									<li class="profile-info-footer__item">Location:blog:${user.location}</li>
									<li class="profile-info-footer__item">Member Since:${user.created_at}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
    
    
    `
	}
	showRepos(repos) {
		let output = ''
		repos.forEach(function (repo) {
			output += `
		  <li class="repos-body__item">
		  <a href="${repo.html_url}" class="repos-body__link">${repo.name}</a>
		  <div class="repos-info">
		    <ul class="repos-info__list">
		      <li class="repos-info__item item blue">Stars: ${repo.stargazers_count}</li>
		      <li class="repos-info__item green item">Watchers: ${repo.watchers}</li>
		      <li class="repos-info__item item yellow">Forks: </li>
		    </ul>
		  </div>
		</li>
		  `
		})

		document.querySelector('.repos-body__list').innerHTML = output
	}

	clearProfile() {
		this.profile.innerHTML = ''
	}
	showAlert(message) {
		//Clear alert
		this.clearAlert()
		//Search element
		const search = document.querySelector('.search')
		//Creating element
		const alert = document.createElement('div')
		const container = document.createElement('div')
		const alertBody = document.createElement('div')
		//Adding a class name
		alert.className = 'alert'
		container.className = 'container'
		alertBody.className = 'alert-body'
		//Append element
		alert.appendChild(container)
		container.appendChild(alertBody)
		alertBody.appendChild(document.createTextNode(message))
		//Insert alert before search
		search.insertBefore(alert, search.children[0])

		//Clear alert after
		setTimeout(() => {
			this.clearAlert()
		}, 2000)
	}
	clearAlert() {
		const currentAlert = document.querySelector('.alert')

		if (currentAlert) {
			currentAlert.remove()
		}
	}
}
