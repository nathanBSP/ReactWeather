var React = require('react');


var WeatherMessage = ({location,temperature}) => {
	return(
		<div>
			<h3 className="text-center">It's {temperature} in  {location}</h3>
		</div>

	);
}

module.exports = WeatherMessage;
