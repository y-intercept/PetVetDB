const React = require('react')
const { Link, Redirect } = require('react-router')
const data = require('../../utils/data')()

const ShowOwner = React.createClass ({
	getInitialState() {
		return {
			owner: {},
			removed: false
		}
	},
	componentDidMount() {
		data.get('owners', this.props.params.id)
			.then(owner => this.setState({ owner }))
			console.log(this.state)
	},
	render() {
		return (
			<div>
				<h2>Show Owner</h2>
				<ul>
					<li>{this.state.owner.lastName}</li>
					<li>{this.state.owner.firstName}</li>
					{/* <li>{this.state.owner.address}</li>
					<li>{this.state.owner.city}</li>
					<li>{this.state.owner.state}</li>
					<li>{this.state.owner.zip}</li>
					<li>{this.state.owner.email}</li> */}
				</ul>
				<button>Delete</button>
			</div>
		)
	}
})

module.exports = ShowOwner
