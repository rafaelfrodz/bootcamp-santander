const ul = document.querySelector('#list')
const URLDATA_USERS = 'https://jsonplaceholder.typicode.com/users'

const a = () => {
	fetch(URLDATA_USERS)
	.then((resp) => resp.json())
	.then((data) => {
		console.log(data)
		return data.map((user) => {
			let li = document.createElement('li');
			li.innerHTML = `${user.name} (${user.email})`
			ul.appendChild(li)
		})
		
	}) 
	.catch((error) => {
		console.log('ops!' + error)
	}) }



	
