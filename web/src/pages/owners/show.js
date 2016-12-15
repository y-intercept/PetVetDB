const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const {pluck, filter, compose } = require('ramda')
const { Row, Grid, Col, Panel, Button} = require('react-bootstrap')
const PanelsInstance  = require('./showComponent')


const ShowOwner = React.createClass({
  getInitialState() {
    return {
			pets: [],
			owner: {},
			removed: false,
			error: false
		}
  },
  componentDidMount() {
    data.get('owners', this.props.params.id)
			.then(owner => this.setState({owner}))
			.catch(err => this.setState({error: true}))
		data.list('pets')
			.then(obj => compose(
				filter(item => item.owner_id === this.state.owner._id),
				pluck('doc')
			)(obj.rows))
			.then(pets => this.setState({ pets }))
  },
  handleRemove(e) {
    e.preventDefault()
    if (confirm('Are you sure?')) {
      data.remove('owners', this.props.params.id, this.state.owner)
				.then(res => this.setState({removed: true}))
    }
  },

render() {

  const petList = list =>
    <li key={list._id} className="list f3 fw3">
      <Link to={`/pets/${list._id}/show`}>{list.name}</Link>
    </li>

  return (
    <div className="mv6">

      {this.state.error
        ? <Redirect to="/owners"/>
        : null}
      {this.state.removed
        ? <Redirect to="/owners"/>
        : null}

      <Grid>
        <Row>
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={4}>
            <PanelsInstance data={this.state.owner} onDelete={this.handleRemove}/>
          </Col>
          <Col xs={12} md={2}>
            <Panel header="Pets" className="list f3 fw3 mv4">
              {this.state.pets.map(petList)}
              <Button bsStyle="default" className="mt2">
                <Link to={`/pets/new?owner_id=${this.state.owner._id}&name=${this.state.owner.firstName}+${this.state.owner.lastName}`}>Add Pet</Link>
              </Button>
            </Panel>
          </Col>
          <Col xs={12} md={3}></Col>
        </Row>
      </Grid>
    </div>
    )
  }
})

module.exports = ShowOwner
