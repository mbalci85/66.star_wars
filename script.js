// In this challenge you will build a function 'starWars' which renders different starwars elements. Like “films”, “planets”, “starships”, etc.

const output = document.getElementById('output');
const spinner = document.getElementById('spinner');
const url = 'https://starwars.egghead.training/';

const starWars = (endpoint) => {
	fetch(url + endpoint)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				return Promise.reject(Error('Unsuccessful Response'));
			}
		})
		.then((data) =>
			data.map((episode) =>
				console.log(
					`Film episode${episode.episode_id} title is ${episode.title}`,
				),
			),
		)
		.catch((err) => console.log(err));
};

starWars('films');
// starWars('planets');
// starWars('species');
// starWars('people');
// starWars('vehicles');
// starWars('starships');
