const React = require('react')
const { Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const { pluck, filter, compose } = require('ramda')
const dateformat = require('dateformat')
const PanelsInstance = require('./showComponent')
const { Grid, Col, Row, Panel } = require('react-bootstrap')
// const GridInstance = require('../../components/grid.js')


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

  const petList = pets =>
    <li key={pets._id} className="list f2 fw3">
      <Link to={`/pets/${pets._id}/show`}>{pets.name}</Link>
    </li>

const examList = exam => <li key={exam._id}>{dateformat(exam.date, "mm/dd/yyyy")}</li>

    return (
      <div>
        {this.state.error
          ? <Redirect to="/pets"/>
          : null}
        {this.state.removed
          ? <Redirect to="/pets"/>
          : null}
					{/* <Container> */}
					{/* <GridInstance data={this.state.pet} /> */}
					<Grid>
						<Row className="show-grid">
							<Col xs={8} md={5}>
								<PanelsInstance data={this.state.pet} onDelete={this.handleRemove} />
							</Col>
							<Col xs={8} md={2}>
								<Panel header="Siblings" className="mv4">
								  <p>placeholder text</p>
								{/* <Button bsStyle="default"><Link to={`/pets/new?owner_id=${this.state.pet._id}&name=${this.state.pet.firstName}+${this.state.pet.lastName}`}>Add Pet</Link></Button> */}
							  </Panel>
							</Col>
						</Row>
					</Grid>

				{/* <h2>Show Pet</h2>
        <ul>
          <li>{this.state.pet.name}</li>
          <li>{this.state.exams.map(examList)}</li>
        </ul>
        <pre>{JSON.stringify(this.state.pet, null, 4)}</pre>
        <button onClick={this.handleRemove}>Delete</button>
        <button>
          <Link to={`/exams/new?pet_id=${this.state.pet._id}&name=${this.state.pet.name}`}>New Exam</Link>
        </button>
        <button>
          <Link to={`/pets/${this.state.pet._id}/edit`}>Edit</Link>
        </button>
        <Link to="/pets">cancel</Link>
        <Link to="/">Home</Link> */}

      </div>
    )
  }
})

module.exports = ShowPet
