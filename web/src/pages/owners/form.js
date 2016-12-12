const React = require('react')
const data = require('../../utils/data')()
const { Redirect, Link } = require('react-router')
const FormInstance = require('./formComponent')


const OwnerForm = React.createClass({
	getInitialState() {
		return {
			owner: {
				firstName: '',
				lastName: '',
				address: '',
				city: '',
				state: '',
				zip: '',
				email: '',
				phone: ''
			},
			resolved: false
		}
	},
	componentDidMount() {
		if (this.props.params.id) {
		data.get('owners', this.props.params.id)
			.then(owner => this.setState({ owner }))
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
		if (!this.state.owner._id) {
			data.post('owners', this.state.owner)
			.then(res => this.setState({ resolved: true }))
		} else {
			data.put('owners', this.state.owner._id, this.state.owner)
			.then(res => this.setState({ resolved: true}))
		}
	},

	render() {

		return (
			<div>

					{this.state.resolved && this.state.owner._id ? <Redirect to={`/owners/${this.state.owner._id}/show`} /> : null}
					{this.state.resolved && !this.state.owner._id ? <Redirect to="/owners" /> : null }

				<p className="f3">New Owner</p>
				<FormInstance data={this.state.owner} change={this.handleChange} submit={this.handleSubmit} />



				{/* <form onSubmit={this.handleSubmit} className="pa3">
					<div>
						<label className="f6 b db mb2">First Name</label>
						<input className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.owner.firstName}
							onChange={this.handleChange('firstName')}
							type="text" />
					</div>
					<div>
						<label className="f6 b db mb2">Last Name</label>
    				<input className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.owner.lastName}
							onChange={this.handleChange('lastName')}
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
						<label className="f6 b db mb2">Email</label>
    				<input className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.owner.email}
							onChange={this.handleChange('email')}
							type="text" />
					</div>
					<div>
						<button>Submit</button>
						<Link to="/owners">cancel</Link>
					</div>
				</form> */}
			</div>
		)
	}
})

module.exports = OwnerForm
