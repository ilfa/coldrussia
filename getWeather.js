const axios = require('axios');
const fs = require('fs');
const cityList =require('./weather_data/listId.json');
const dict = require('./weather_data/dictEnRu.json');
const config = require('./appConfig');
const cityPerRequest = 20;

function makeRequest(idList) {
	const options = {
		timeout: 60000,
    params: {
			id: idList,
			units: 'metric'
		},
		headers: {
			"x-api-key": config.apiKey
		}
	};
  return axios.get('http://api.openweathermap.org/data/2.5/group', options);
}

function translate(name) {
	return dict[name] || name;
}

function sortData(city1, city2) {
	return city1.main.temp - city2.main.temp;
}

let ids = [];
while (cityList.length > 0) {
	ids.push(cityList.splice(0, cityPerRequest).join());
}

let sequence = Promise.resolve();
let cities = [];

ids.forEach(function(nextBlock) {
	sequence = sequence.then(function() {
			return makeRequest(nextBlock);
		})
		.then(function(citiesBlock) {
		  const { status, data } = citiesBlock;
			if (status === 200) {
				process.stdout.write(".");
				cities = cities.concat(data.list);
			} else {
				console.log('error', citiesBlock);
			}
		});
});

sequence.then(function() {

	var coldestCities = cities.sort(sortData).slice(0, 50);
	var coldestShort = [];

	coldestCities.forEach(function(city) {
		coldestShort.push({
			id: city.id,
			name: translate(city.name),
			temp: city.main.temp.toFixed()
		});
	});

	fs.writeFileSync('./weather_data/coldestCities.json', JSON.stringify(coldestShort));
	console.log('finish');
})
	.catch(function(err) {
		console.log('fatal error', err);
});

