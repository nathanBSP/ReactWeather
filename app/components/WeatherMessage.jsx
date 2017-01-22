var React = require('react');


var WeatherMessage = ({location,temperature}) => {
	return(
		<div>
			<p>It's {temperature} in  {location}</p>
		</div>

	);
}

module.exports = WeatherMessage;