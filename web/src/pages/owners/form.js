const React = require('react')
const data = require('../../utils/data')()
const { Redirect } = require('react-router')
const FormInstance = require('./formComponent')
const { Grid, Row, Col } = require('react-bootstrap')


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
		if (e.charCode || e.keyCode === 13) {
			alert('you hit enter, numbnut!')
			this.setState({resolved: false})
		}
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
			<div className="mv5 pv2">
				{this.state.resolved && this.state.owner._id ? <Redirect to={`/owners/${this.state.owner._id}/show`} /> : null}
				{this.state.resolved && !this.state.owner._id ? <Redirect to="/owners" /> : null }
				<Grid>
					<Row>
						<Col xs={12} md={4}></Col>
						<Col xs={12} md={4}>
							<p className="f2">New Owner</p>
							<FormInstance data={this.state.owner} change={this.handleChange} submit={this.handleSubmit} />
						</Col>
						<Col xs={12} md={4}></Col>

					</Row>
				</Grid>
			</div>
		)
	}
})

module.exports = OwnerForm
