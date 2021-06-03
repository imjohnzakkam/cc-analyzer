const fetch = require('node-fetch');

async function getData() {
	var date = new Date();
	console.log('data1');
	var y = date.toISOString();
	var current_time = "";
	for(var i = 0; i < y.length - 5; i++) current_time += y[i];
	console.log(current_time)
	let url = "https://clist.by/api/v2/contest/?resource_id=2&start__gt="+current_time+"&order_by=start&username=imreallyjohn&api_key=a959cb12328ccc719dff701bb2b7d520f2f8d70c";
	console.log(url);
	let response = await fetch(url);
	let data = await response.json();
	console.log('data2');
	return data;
}

var Top5 = [];
getData()
getData().then(data => {	
	console.log("John");
	const size = data.objects.length;
	for(var i = 0; i < Math.min(5, size); i++) Top5.push(data.objects[i]);
});

export default Top5;