const React = require('react')
const { Redirect } = require('react-router')
const data = require('../../utils/data')()
const { Grid, Col, Row } = require('react-bootstrap')
const PanelsInstance = require('./showComponent.js')

const ShowPet = React.createClass ({
	getInitialState() {
		return {
			exam: {
				pet: {
					owner_id: ''
				}
			},
			removed: false,
			error: false
		}
	},
	componentDidMount() {
		data.get('exams', this.props.params.id)
			.then(exam => this.setState({ exam }))
			.catch(err => this.setState({error: true}))
	},
	handleRemove(e) {
		e.preventDefault()
		if (confirm('Are you sure?')) {
		data.remove('exams', this.props.params.id, this.state.exam)
			.then(res => this.setState({ removed: true}))
		}
	},
	render() {
		return (
			<div className="mv5">
				{this.state.error ? <Redirect to="/exams" /> : null}
				{this.state.removed ? <Redirect to="/exams" /> : null}

				<Grid>
					<Row className="show-grid">
						<Col xs={12} md={3}></Col>
						<Col xs={12} md={6}>
							<PanelsInstance data={this.state} onDelete={this.handleRemove} />
						</Col>
						<Col xs={12} md={3}></Col>
					</Row>
				</Grid>
		</div>
		)
	}
})

module.exports = ShowPet
