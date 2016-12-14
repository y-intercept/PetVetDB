const React = require('react')
const { Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const { pluck, filter, compose } = require('ramda')
const dateformat = require('dateformat')
const PanelsInstance = require('./showComponent')
const { Grid, Col, Row, Panel, Image } = require('react-bootstrap')

const ShowPet = React.createClass({
  getInitialState() {
    return {
      exams: [],
      pet: {},
      removed: false,
      error: false
    }
  },
  componentDidMount() {
    data.get('pets', this.props.params.id)
			.then(pet => this.setState({pet}))
			.catch(err => this.setState({error: true}))
		data.list('exams')
			.then(item => compose(
				filter(item => item.pet_id === this.state.pet._id),
				pluck('doc')
			)(item.rows))
			.then(exams => this.setState({exams}))
  },
  handleRemove(e) {
    e.preventDefault()
    if (confirm('Are you sure?')) {
      data.remove('pets', this.props.params.id, this.state.pet)
				.then(res => this.setState({removed: true}))
    }
  },

render() {

  const examList = exam => <li key={exam._id} className="list f3 fw3">
                              <Link to={`/exams/${exam._id}/show`}>{dateformat(exam.date, "mm/dd/yyyy")}</Link>
                           </li>

  return (
    <div className="mv5">

      {this.state.error
        ? <Redirect to="/pets"/>
        : null}
      {this.state.removed
        ? <Redirect to="/pets"/>
        : null}

      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={4}>
            <PanelsInstance data={this.state} onDelete={this.handleRemove}/>
          </Col>
          <Col xs={12} md={2} >
            <Panel header={this.state.pet.name} className="mv2 fl">
  						<Image className="v-mid" src={this.state.pet.pic} alt=":(" circle />
  			    </Panel>
            <Panel header="Past Exams" className="fl cf ml4 mt2">
              {this.state.exams.map(examList)}
            </Panel>
          </Col>
          <Col xs={6} md={3}></Col>
        </Row>
      </Grid>
    </div>
  )
}
})

module.exports = ShowPet
