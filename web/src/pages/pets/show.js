const React = require('react')
const { Link, Redirect } = require('react-router')
const data = require('../../utils/data')()

const ShowPet = React.createClass ({
	getInitialState() {
		return {
			pet: {
				name: ''
			},
			removed: false,
			error: false
		}
	},
	componentDidMount() {
		data.get('pets', this.props.params.id)
			.then(pet => this.setState({ pet }))
			.catch(err => this.setState({error: true}))
		data.list('exams')
			.then(exams => this.setState({exams}))
	},
	handleRemove(e) {
		e.preventDefault()
		if (confirm('Are you sure?')) {
		data.remove('pets', this.props.params.id, this.state.pet)
			.then(res => this.setState({ removed: true}))
		}
	},
	render() {
		return (
			<div>
				{this.state.error ? <Redirect to="/pets" /> : null}
				{this.state.removed ? <Redirect to="/pets" /> : null}
				<h2>Show Pet</h2>
				<ul>
					<li>{this.state.pet.name}</li>
				</ul>
				<pre>{JSON.stringify(this.state.pet, null, 4)}</pre>
				<button onClick={this.handleRemove}>Delete</button>
				<button><Link to={`/exams/new?pet_id=${this.state.pet._id}&name=${this.state.pet.name}`}>New Exam</Link></button>
				<button><Link to={`/pets/${this.state.pet._id}/edit`}>Edit</Link></button>
				<Link to="/pets">cancel</Link>
				<Link to="/">Home</Link>

			</div>
		)
	}
})

module.exports = ShowPet
