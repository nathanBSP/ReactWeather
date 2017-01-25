var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server')

var ErrorModal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      title: "Error"
    };
  },
  componentDidMount: function() {
    var {title,message} = this.props;
    var modalMarkup = (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    //convert jsx to html
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    //add html to dom
    $(ReactDOM.findDOMNode(this)).html($modal);
    //let fondation show
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render: function() {

    return(
      <div/>
    );
  }

});

module.exports = ErrorModal;
