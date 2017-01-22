var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0df65b004e3769499dc010910739b052&units=metric';

// API KEY : 0df65b004e3769499dc010910739b052
module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		console.log(requestUrl);
		return axios.get(requestUrl).then(function(res){
			if(res.data.cod && res.data.message)
			{
				throw new Error(res.data.message);
			}
			else
			{
				return res.data.main.temp;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	}
}