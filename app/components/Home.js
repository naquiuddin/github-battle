var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function(){
		return (
			<div className="jumbotron col-sm-12 text-center" style={transparentBg}>
				<h1 className="text-primary">GitHub Battle</h1>
				<p className="lead">Some fancy motto</p>
				<Link to="/playerOne">
					<button className="btn btn-lg btn-primary">
						Get Started
					</button>
				</Link>
			</div>
		);
	}
});

module.exports = Home;