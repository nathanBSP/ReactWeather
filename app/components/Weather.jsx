var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var Weather = React.createClass({

	getInitialState : function(){
		return {
			isLoading: false
		}
	},

	handleSearch : function(location){
		var that =this;

		this.setState({isLoading:true});

		openWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location:location,
				temperature:temp,
				isLoading:false
			});
		}, function(err) {
			that.setState({
				isLoading:false
			});
			alert(err);
		});
	},

	render : function() {
		var {isLoading,location,temperature} = this.state;

		function renderMessage(){
			if(isLoading == true){
				return(
					<h3 className="text-center"> Fetching Weather ...</h3>
				);
			}else if (temperature && location) {
				return(
					<WeatherMessage location={location} temperature={temperature}/>
				);
			}
		}

		return(
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;
