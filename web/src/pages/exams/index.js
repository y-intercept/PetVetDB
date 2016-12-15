const React = require('react')
const data = require('../../utils/data')()
const {Link} = require('react-router')
const dateformat = require('dateformat')
const {pluck} = require('ramda')
var ageCalculator = require('age-calculator');
const { Table, Button, Grid, Col, Row } = require('react-bootstrap')

const Exams = React.createClass({
  getInitialState() {
    return {
			exams: []
		}
  },
  componentDidMount() {
    data.list('exams')
			.then(obj => {
				const exams = pluck('doc', obj.rows)
				this.setState({exams})
			})
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

    return (

      <div className="pa5">
        <Grid>
          <Row>
            <Col xs={12} md={2}></Col>
            <Col xs={12} md={8}>
              <div className="f3 mv5 bg-light-gray pa4 br3 cf">Exam Log
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
                    {this.state.exams.map(table)}
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
