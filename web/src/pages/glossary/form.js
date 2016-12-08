const React = require('react')
const data = require('../../utils/data')()
const { Redirect, Link } = require('react-router')

const GlossaryForm = React.createClass({
	getInitialState() {
		return {
			glossary: {
				name: ''
			},
			resolved: false
		}
	},
	componentDidMount() {
		data.get('glossary', this.props.params.id)
			.then(glossary => this.setState({glossary}))
	},
	handleChange (field) {
		return (e) => {
			let glossary= {...this.state.glossary}
			glossary[field] = e.target.value
			this.setState({glossary})
		}
	},
	handleSubmit (e) {
		e.preventDefault()
		if (!this.state.glossary._id) {
			data.post('glossary', this.state.glossary)
			.then(res => this.setState({ resolved: true }))
		} else {
			data.put('glossary', this.state.glossary._id, this.state.glossary)
			.then(res => this.setState({ resolved: true}))
		}
	},
	render() {
		return (
			<div>
				<span>
					{this.state.resolved && this.state.glossary._id ? <Redirect to={`/glossary/${this.state.glossary._id}/show`} /> : null}
					{this.state.resolved && !this.state.glossary._id ? <Redirect to="/glossary" /> : null }
				</span>
				<p className="f3 ma3">New Entry</p>
				<form onSubmit={this.handleSubmit} className="pa3">
					<div>
						<label className="f6 b db mb2">Name</label>
						<input className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.glossary.name}
							onChange={this.handleChange('name')}
							type="text" />
					</div>
					<div>
						<label className="f6 b db mb2">Definition</label>
    				<input className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.glossary.def}
							onChange={this.handleChange('def')}
							type="text" />
					</div>
					<div>
						<button>Submit</button>
						<Link to="/glossary">cancel</Link>
					</div>
				</form>
			</div>
		)
	}
})

module.exports = GlossaryForm
