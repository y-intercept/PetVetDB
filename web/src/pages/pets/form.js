const React = require('react')
const data = require('../../utils/data')()
const { Redirect } = require('react-router')
const FormInstance = require('./formComponent')
const { Grid, Row, Col } = require('react-bootstrap')

const PetForm = React.createClass({
  getInitialState() {
    return {
      owner: {},
      pet: {
        name: '',
        species: '',
        breed: '',
        color: '',
        markings: '',
        sex: '',
        dob: ''
      },
      resolved: false
    }
  },
  componentDidMount() {
    if (this.props.params.id) {
      data.get('pets', this.props.params.id)
        .then(pet => this.setState({ pet }))
    }
    data.get('owners', this.props.location.query.owner_id)
      .then(owner => {
        const pet = {...this.state.pet}
        pet.owner_id = owner._id
        pet.ownerFirstName = owner.firstName
        pet.ownerLastName = owner.lastName
        this.setState({ pet })
      })
  },
  handleChange(field) {
    return (e) => {
      let pet = {...this.state.pet}
      pet[field] = e.target.value
      this.setState({ pet })
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    if (e.charCode || e.keyCode === 13) {
      this.setState({resolved: false})
		}
    if (!this.state.pet._id) {
      data.post('pets', this.state.pet)
      .then(res => this.setState({resolved: true}))
    } else {
      data.put('pets', this.state.pet._id, this.state.pet)
      .then(res => this.setState({resolved: true}))
    }
  },
  render() {

    const formState = this.state.pet._id ? 'Edit' : 'New'

    return (
      <div className="mt4">
        {this.state.resolved && this.state.pet._id ? <Redirect to={`/owners/${this.state.pet.owner_id}/show`} /> : null}
        {this.state.resolved && !this.state.pet._id ? <Redirect to="/pets" /> : null }
        <Grid>
          <Row>
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}>
              <p className="f2">
                {formState} pet for {this.state.pet.ownerFirstName + " " + this.state.pet.ownerLastName}
              </p>
              <FormInstance data={this.state.pet} change={this.handleChange} submit={this.handleSubmit}/>
            </Col>
            <Col xs={12} md={4}></Col>
          </Row>
        </Grid>
      </div>
    )
  }
})

module.exports = PetForm
