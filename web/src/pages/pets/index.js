const React = require('react')
const data = require('../../utils/data')()
const { Link } = require('react-router')
const { pluck, splitEvery } = require('ramda')
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
		const wrapper = item => (
			<Row>
				<Col xs={12} md={2}></Col>
				{item}
				<Col xs={12} md={2}></Col>
			</Row>
		)

		const rows = item => {
			return item.map(PanelsInstance)
		}

		const newPets = splitEvery(4,this.state.pets).map(rows).map(wrapper)

		return (
			<div className="pa5">
				<div className="f2 tc mv4">Pets</div>
	        <Grid>
						{newPets}
	        </Grid>
	  	</div>
		)
	}
})

module.exports = Pets
