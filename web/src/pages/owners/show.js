const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const {pluck, filter, compose, tap} = require('ramda')
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
			.then(pets => this.setState({pets}))
  },
  handleRemove(e) {
    e.preventDefault()
    if (confirm('Are you sure?')) {
      data.remove('owners', this.props.params.id, this.state.owner)
				.then(res => this.setState({removed: true}))
    }
  },
	
  render() {

    const petList = pets =>
			<li key={pets._id} className="list f2 fw3">
	      <Link to={`/pets/${pets._id}/show`}>{pets.name}</Link>
	    </li>

    return (
      <div>

        {this.state.error
          ? <Redirect to="/owners"/>
          : null}
        {this.state.removed
          ? <Redirect to="/owners"/>
          : null}

				<Grid>
					<Row className="show-grid">
						<Col xs={8} md={5}>
							<PanelsInstance data={this.state.owner} onDelete={this.handleRemove} />
						</Col>
						<Col xs={8} md={2}>
							<Panel header="Pets" className="mv4">
							<ul>
		          	{this.state.pets.map(petList)}
		        	</ul>
							<Button bsStyle="default"><Link to={`/pets/new?owner_id=${data._id}&name=${data.firstName}+${data.lastName}`}>Add Pet</Link></Button>
						</Panel>
						</Col>
					</Row>
				</Grid>
      </div>
    )
  }
})

module.exports = ShowOwner
