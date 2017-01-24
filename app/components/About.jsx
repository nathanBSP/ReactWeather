var React = require('react');

var About = (props) => {
	return(
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>
				This is a weather application build on React. I have built this for the
				Complete React Web App developper Course.
			</p>
			<p>
				Here are some of the tools used:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a>
						<blockquote>
							This was the JavaScript Framework used.
						</blockquote>
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a>
					<blockquote>
						I used Open Weather Map to search for weather data by city name.
					</blockquote>
				</li>
			</ul>
		</div>
	);
}

module.exports = About;
