const React = require('react')
const { Link, Redirect } = require('react-router')
const data = require('../../utils/data')()

const ShowOwner = React.createClass ({
	getInitialState() {
		return {
			owner: {},
			removed: false,
			error: false
		}
	},
	componentDidMount() {
		data.get('owners', this.props.params.id)
			.then(owner => this.setState({ owner }))
			.catch(err => this.setState({error: true}))
	},
	handleRemove(e) {
		e.preventDefault()
		if (confirm('Are you sure?')) {
		data.remove('owners', this.props.params.id, this.state.owner)
			.then(res => this.setState({ removed: true}))
		}
	},
	render() {
		return (
			<div>
				{this.state.error ? <Redirect to="/owners" /> : null}
				{this.state.removed ? <Redirect to="/owners" /> : null}
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
				<button onClick={this.handleRemove}>Delete</button>
				<button><Link to={`/owners/${this.state.owner._id}/edit`}>Edit</Link></button>
				<Link to="/owners">cancel</Link>
				<Link to="/">Home</Link>

			</div>
		)
	}
})

module.exports = ShowOwner
