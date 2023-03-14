//Init GitHub
const github = new GitHub()
//Init Ui
const ui = new UI()

//Input
const searchUser = document.getElementById('user')

searchUser.addEventListener('keyup', (e) => {
	//Get username
	const username = e.target.value

	if (username !== '') {
		github.getUser(username).then((data) => {
			if (data.profile.message === 'Not Found') {
				//Show alert
				ui.showAlert('User not found!')
			} else {
				//Show profile
				ui.showProfile(data.profile)
				ui.showRepos(data.repos)
			}
		})
	} else {
		//Clear profile
		ui.clearProfile()
	}
})
