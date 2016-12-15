const React = require('react')
const data = require('../../utils/data')()
const {Link} = require('react-router')
const dateformat = require('dateformat')
const { pluck, filter } = require('ramda')
const ageCalculator = require('age-calculator');
const { Table, Button, Grid, Col, Row, FormGroup, FormControl } = require('react-bootstrap')

const Exams = React.createClass({
  getInitialState() {
    return {
			exams: [],
      filtered: [],
      searchBy: ''
		}
  },
  componentDidMount() {
    data.list('exams')
			.then(obj => {
				const exams = pluck('doc', obj.rows)
				this.setState({exams, filtered: exams})
			})
  },
  filter(e) {
    this.setState({filtered:
      filter(
        exam => exam[this.state.searchBy].indexOf(e.target.value) === 0,
        this.state.exams
      )
    })
  },
  handleChange(e) {
    let search = e.target.value
    this.setState({searchBy: search})
  },

  render() {
    const table = ((exam, index) => <tr key={exam._id}>
      <td>{index + 1}</td>
      <td><Link className="link" to={`/exams/${exam._id}/show?owner_id=${exam.pet.owner_id}`}>{dateformat(exam.date, "mm/dd/yyyy")}</Link></td>
      <td><Link className="link" to={`/pets/${exam.pet._id}/show`}> {exam.pet.name}</Link></td>
			<td>{exam.pet.species}</td>
			<td>{ageCalculator.getAge(exam.pet.dob)}</td>
			<td>{exam.pet.dob}</td>
			<td ><Link className="link" to={`/owners/${exam.pet.owner_id}/show`}>{exam.ownerName}</Link></td>
    </tr>)
    console.log(this.state)

    return (
      <div className="pa5">
        <Grid>
          <Row>
            <Col xs={12} md={2}></Col>
            <Col xs={12} md={8}>
              <div className="f3 mv5 bg-light-gray pa4 br3 cf tc">
                <p className="f2 mb2 tc">Exam Log</p>
                <div>
                  <p className="dib">Search By:</p>
                  <select className="mb2 ml2" onChange={this.handleChange} >
                    <option value="petName">Pet Name</option>
                    <option value="ownerName">Owner</option>
                    <option value="date">Date</option>
                  </select>
                </div>
                <div>
                  <FormGroup>
                    <FormControl type="text" placeholder="Search" onChange={this.filter} />
                  </FormGroup>
                </div>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th className="w5 pb2 bb b b--mid-gray">Date</th>
                      <th className="w5 pb2 bb b b--mid-gray">Patient</th>
                      <th className="w5 pb2 bb b b--mid-gray">Species</th>
                      <th className="w5 pb2 bb b b--mid-gray">Age</th>
        							<th className="w5 pb2 bb b b--mid-gray">DOB</th>
                      <th className="w5 pb2 bb b b--mid-gray">Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.filtered.map(table)}
                  </tbody>
                </Table>
                <Button bsStyle="default" className="fl">
                  <Link to="/">Home</Link>
                </Button>
                <Col xs={12} md={2}></Col>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
})

module.exports = Exams
