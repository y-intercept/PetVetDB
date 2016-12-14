const React = require('react')
const data = require('../../utils/data')()
const { Link } = require('react-router')
const { pluck } = require('ramda')
const { Panel, Image, Grid, Row, Col  } = require('react-bootstrap')

const Pets = React.createClass({
	getInitialState() {
		return {
			pets: []
		}
	},
	componentDidMount() {
		data.list('pets')
			.then(obj => {
				const pets = pluck('doc', obj.rows)
				this.setState({pets})
			})
	},
	render () {

		const PanelsInstance = pet => (
				<Col xs={6} md={2} key={pet._id}>
					<Panel header={pet.name}>
						<Link to={`/pets/${pet._id}/show`}><Image className="panel-image" src={pet.pic} circle /></Link>
			    </Panel>
				</Col>
			);

		return (
			<div className="pa5">
				<div className="f2 tc mv4">Pets</div>
	        <Grid>
						<Row>
							<Col xs={12} md={2}>
							</Col>
	          	{this.state.pets.map(PanelsInstance)}
							<Col xs={12} md={2}></Col>
						</Row>
	        </Grid>
	  	</div>
		)
	}
})

module.exports = Pets
