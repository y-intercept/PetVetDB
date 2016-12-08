const React = require('react')
const data = require('../../utils/data')()
const { Redirect } = require('react-router')

const OwnerForm = React.createClass({
	getInitialState() {
		return {
			owner: {},
			resolved: false
		}
	},
	handleChange (field) {
		return (e) => {
			let owner = {...this.state.owner}
			owner[field] = e.target.value
			this.setState({ owner })
		}
	},
	handleSubmit (e) {
		e.preventDefault()
		data.post('owners', this.state.owner)
			.then(res => this.setState({ resolved: true }))
	},
	render() {
		return (
			<div>
				<span>
					{this.state.resolved ? <Redirect to="/owners" /> : null}
				</span>
				<p className="f3 ma3">New Owner</p>
				<form onSubmit={this.handleSubmit} className="pa3">
					<div>
						<label className="f6 b db mb2">Last Name</label>
    				<input className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.owner.lastName}
							onChange={this.handleChange('lastName')}
							type="text" />
					</div>
					<div>
						<label className="f6 b db mb2">First Name</label>
    				<input className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.owner.firstName}
							onChange={this.handleChange('firstName')}
							type="text" />
					</div>
					<div>
						<label className="f6 b db mb2">Address</label>
    				<input className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.owner.address}
							onChange={this.handleChange('address')}
							type="text" />
					</div>
					<div>
						<label className="f6 b db mb2">City</label>
    				<input className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.owner.city}
							onChange={this.handleChange('city')}
							type="text" />
					</div>
					<div>
						<label className="f6 b db mb2">State</label>
    				<input className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.owner.state}
							onChange={this.handleChange('state')}
							type="text" />
					</div>
					<div>
						<label className="f6 b db mb2">Zip Code</label>
    				<input className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.owner.zip}
							onChange={this.handleChange('zip')}
							type="text" />
					</div>
					<div>
						<button>Submit</button>
					</div>
				</form>
			</div>
		)
	}
})

module.exports = OwnerForm
