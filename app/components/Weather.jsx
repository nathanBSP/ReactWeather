var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

	getInitialState : function(){
		return {
			isLoading: false,
		}
	},

	componentDidMount: function() {
		var location = this.props.location.query.location;
		if(location && location.length>0)
		{
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},

	handleSearch : function(location){
		var that =this;
		//reset state and diaplay loading
		this.setState({
			isLoading:true,
			errorMessage: undefined,
			location: undefined,
			temperature: undefined
		});
		//try to get data for location
		openWeatherMap.getTemp(location).then(function(temp){
			//succes handler
			that.setState({
				location:location,
				temperature:temp,
				isLoading:false
			});
		}, function(e) {
			//error handler
			that.setState({
				isLoading:false,
				errorMessage: e.message
			});
		});
	},

	componentWillReceiveProps: function(nextProps) {
		var location = nextProps.location.query.location;
		if(location && location.length>0)
		{
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},

	render : function() {
		var {isLoading,location,temperature,errorMessage} = this.state;

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

		function renderError()
		{
			if(typeof errorMessage === 'string')
			{
				return (
					<ErrorModal title={"Unable To Get Weather"} message={errorMessage}/>
				);
			}
		}

		return(
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;
