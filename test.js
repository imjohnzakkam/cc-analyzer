const fetch = require('node-fetch');

async function getData() {
	const current_time = "2021-06-03T12:00:00"
	let url = "https://clist.by/api/v2/contest/?resource_id=2&username=imreallyjohn&api_key=a959cb12328ccc719dff701bb2b7d520f2f8d70c";
	let response = await fetch(url);
	let data = await response.json();
	return data;
}

getData().then(data => console.log(data));