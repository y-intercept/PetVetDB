const React = require('react')
const { Link, Redirect } = require('react-router')
const data = require('../../utils/data')()

const ShowOwner = React.createClass ({
	getInitialState() {
		return {
			glossary: {},
			removed: false,
			error: false
		}
	},
	componentDidMount() {
		data.get('glossary', this.props.params.id)
			.then(glossary => this.setState({ glossary }))
			.catch(err => this.setState({error: true}))
	},
	handleRemove(e) {
		e.preventDefault()
		if (confirm('Are you sure?')) {
		data.remove('glossary', this.props.params.id, this.state.glossary)
			.then(res => this.setState({ removed: true}))
		}
	},
	render() {
		return (
			<div>
				{this.state.error ? <Redirect to="/glossary" /> : null}
				{this.state.removed ? <Redirect to="/glossary" /> : null}
				<h2>Glossary</h2>
				<ul>
					<li>{this.state.glossary.name}</li>
					<li>{this.state.glossary.def}</li>
				</ul>
				<button onClick={this.handleRemove}>Delete</button>
				<button><Link to={`/glossary/${this.state.glossary._id}/edit`}>Edit</Link></button>
				<Link to="/glossary">cancel</Link>
				<Link to="/">Home</Link>

			</div>
		)
	}
})

module.exports = ShowOwner
