var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
	render: function(){
		getInitialState: function(){
			return : {
				username: ''
			};
		},
		onUpdateUser: function(e){
			this.setState({
				username: e.target.value
			});
		},
		return (
			<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
				<h1>{this.props.route.header}</h1> 
				<form onSubmit={this.onSubmitUser}>
					<div className="form-group">
						<input 
							className="form-control"
							placeholder="GitHub  Username"
							onChange={this.onUpdateUser}
							value={this.state.username}
							type="text" />
					</div>
					<div className="form-group col-sm-4 col-sm-offset-4">
						<button 
							className="btn btn-block btn-success"
							type="submit">
							Next
					</button>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = PromptContainer;