const React = require('react')
const data = require('../../utils/data')()
const { Redirect } = require('react-router')
const dateformat = require('dateformat')
const { Grid, Row, Col } = require('react-bootstrap')
const FormInstance = require('./formComponent.js')

const ExamForm = React.createClass({
  getInitialState() {
    return {
      exam: {
        date: '',
        pet: {}
      },
      resolved: false,
    }
  },
  componentDidMount() {
    if (this.props.params.id) {
      data.get('exams', this.props.params.id)
        .then(exam => this.setState({ exam }))
    } else {
      data.get('pets', this.props.location.query.pet_id)
       .then(pet => {
        let exam = {...this.state.exam}
        const now = new Date()
        exam.pet = pet
        exam.pet_id = pet._id
        exam.petName = pet.name + ' ' + pet.ownerLastName
        exam.ownerName = pet.ownerFirstName + ' ' + pet.ownerLastName
        exam.date = dateformat(now, "mm/dd/yyyy")
        exam.now = now
        this.setState({exam})
    })
  }
},
  handleChange(field) {
    return (e) => {
      let exam = {...this.state.exam}
      exam[field] = e.target.value
      this.setState({ exam })
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    if (e.charCode || e.keyCode === 13) {
			this.setState({resolved: false})
		}
    if (!this.state.exam._id) {
      data.post('exams', this.state.exam)
      .then(res => this.setState({resolved: true}))
    } else {
      data.put('exams', this.state.exam._id, this.state.exam)
      .then(res => this.setState({resolved: true}))
    }
  },
  render() {
    return (
      <div className="mt4">
				{this.state.resolved && this.state.exam._id ? <Redirect to={`/exams/${this.state.exam._id}/show`} /> : null}
				{this.state.resolved && !this.state.exam._id ? <Redirect to="/exams" /> : null }
				<Grid>
					<Row>
						<Col xs={12} md={4}></Col>
						<Col xs={11} md={4}>
              <p className="f2">Exam for {this.state.exam.petName}</p>
							<FormInstance data={this.state.exam} change={this.handleChange} submit={this.handleSubmit} />
						</Col>
            <Col xs={12} md={4}></Col>
					</Row>
				</Grid>
			</div>
		)
	}
})

module.exports = ExamForm
