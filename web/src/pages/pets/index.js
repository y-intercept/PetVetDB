const React = require('react')
const data = require('../../utils/data')()
const { Link } = require('react-router')
const { pluck } = require('ramda')

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
		const li = pet => <li key={pet._id}><Link to={`/pets/${pet._id}`}>{pet.name}</Link></li>
		return (
			<div className="pa5">
        <span className="f3">Pets</span>
        <Link to="/pets/new">New Pet</Link>
        <ul>
          {this.state.pets.map(li)}
        </ul>
				<Link to="/">Home</Link>
      </div>
		)
	}
})

module.exports = Pets
