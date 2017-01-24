var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return(
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are a few example locations to try out : </p>
			<ol>
				<li>
					<Link to='/?location=Montreal'>Montreal, QC</Link>
				</li>
				<li>
					<Link to='/?location=Ottawa'>Ottawa, QC</Link>
				</li>
			</ol>
		</div>
	);
}

module.exports = Examples;
