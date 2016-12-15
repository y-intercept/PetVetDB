const React = require('react')
const { Link } = require('react-router')
const data = require('../../utils/data')()
const { pluck } = require('ramda')
const { Col, Row, Grid, Table, Button } = require('react-bootstrap')

const Owners = React.createClass({
  getInitialState() {
    return {
      owners: [],
      pets: {}
    }
  },
  componentDidMount() {
    data.list('owners')
      .then(obj => {
				const owners = pluck('doc', obj.rows)
				this.setState({ owners })
			})
  },

  render () {

const table = ((owner, index) => <tr key={owner._id}>
  <td>{index + 1}</td>
  <td><Link className="link" to={`/owners/${owner._id}/show`}>{owner.lastName + ", " + owner.firstName}</Link></td>
  <td>{owner.email}</td>
  <td>{owner.phone}</td>
</tr>)

return (

  <div className="pa5">
    <Grid>
      <Row>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={6}>
          <div className="f3 mv5 bg-light-gray pa4 br3 cf">Owner List
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th className="w5 pb2 bb b b--mid-gray">Name</th>
                  <th className="w5 pb2 bb b b--mid-gray">Email</th>
                  <th className="w5 pb2 bb b b--mid-gray">Phone</th>
                </tr>
              </thead>
              <tbody>
                {this.state.owners.map(table)}
              </tbody>
            </Table>
            <Button bsStyle="default" className="fl">
              <Link to="/">Home</Link>
            </Button>
            <Col xs={12} md={3}></Col>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)
}
})
module.exports = Owners
