const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const {pluck, filter, compose, tap} = require('ramda')

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
    const petList = pets => <li key={pets._id}>
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
        <h2>Show Owner</h2>
        <ul className="link">
          <li>{this.state.owner.lastName}</li>
          <li>{this.state.owner.firstName}</li>
          <li>{this.state.owner.address}</li>
          <li>{this.state.owner.city}</li>
          <li>{this.state.owner.state}</li>
          <li>{this.state.owner.zip}</li>
          <li>{this.state.owner.email}</li>
        </ul>
        <ul>
          {this.state.pets.map(petList)}
        </ul>
        <button onClick={this.handleRemove}>Delete</button>
        <button>
          <Link to={`/pets/new?owner_id=${this.state.owner._id}&name=${this.state.owner.firstName}+${this.state.owner.lastName}`}>Add Pet</Link>
        </button>
        <button>
          <Link to={`/owners/${this.state.owner._id}/edit`}>Edit</Link>
        </button>
        <Link to="/owners">cancel</Link>
        <Link to="/">Home</Link>

      </div>
    )
  }
})

module.exports = ShowOwner
