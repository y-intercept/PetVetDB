const React = require('react')
const { Link, Redirect } = require('react-router')
const data = require('../../utils/data')()

const ShowPet = React.createClass ({
	getInitialState() {
		return {
			pet: {
				name: ''
			},
			removed: false
		}
	},
	componentDidMount() {
		data.get('pets', this.props.params.id)
			.then(pet => this.setState({ pet }))
	},
	handleRemove(e) {
		e.preventDefault()
		if (confirm('Are you sure?')) {
		data.remove('pets', this.props.params.id, this.state.pet)
			.then(res => this.setState({ removed: true}))
		}
	},
	render() {
		console.log(this.state.pet)
		return (
			<div>
				{this.state.removed ? <Redirect to="/pets" /> : null}
				<h2>Show Pet</h2>
				<ul>
					<li>{this.state.pet.name}</li>
				</ul>
				<button onClick={this.handleRemove}>Delete</button>
				<Link to="/pets">cancel</Link>
				<Link to="/">Home</Link>

			</div>
		)
	}
})

module.exports = ShowPet
