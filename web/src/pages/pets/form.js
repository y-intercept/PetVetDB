const React = require('react')
const data = require('../../utils/data')()
const {Redirect, Link} = require('react-router')

const PetForm = React.createClass({
  getInitialState() {
    return {
      owner: {},
      pet: {
        owner_id: '',
        ownerName: ''
      },
      resolved: false
    }
  },
  componentDidMount() {
    if (this.props.params.id) {
      data.get('pets', this.props.params.id)
        .then(pet => this.setState({ pet }))
    }
    data.get('owners', this.props.location.query.owner_id)
      .then(owner => {
        const pet = {...this.state.pet}
        pet.owner_id = owner._id
        pet.ownerName = owner.firstName + "_" + owner.lastName
        this.setState({ pet })
      })
  },
  handleChange(field) {
    return (e) => {
      let pet = {...this.state.pet}
      pet[field] = e.target.value
      this.setState({ pet })
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.pet._id) {
      data.post('pets', this.state.pet)
      .then(res => this.setState({resolved: true}))
    } else {
      data.put('pets', this.state.pet._id, this.state.pet)
      .then(res => this.setState({resolved: true}))
    }
  },
  render() {
    return (
      <div>
        <div className="h-75 v-mid">
        {this.state.resolved ? <Redirect to={`/owners/${this.state.pet.owner_id}/show`} /> : null}
        {/* {this.state.resolved && !this.state.pet._id ? <Redirect to="/pets" /> : null } */}
        <p className="f3 ma3">Add New Pet</p>
        <form onSubmit={this.handleSubmit} className="pa3">
          <div>{this.state.pet.ownerName}</div>
          <div>
            <label className="f6 b db mb2">Name</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.pet.name}
							onChange={this.handleChange('name')}
							type="text"/>
          </div>
          {/* <div>
            <label className="f6 b db mb2">Species</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.pet.species}
							onChange={this.handleChange('species')}
							type="text"/>
          </div>
          <div>
            <label className="f6 b db mb2">Breed</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.pet.breed}
							onChange={this.handleChange('breed')}
							type="text"/>
          </div>
          <div>
            <label className="f6 b db mb2">Color</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.pet.color}
							onChange={this.handleChange('color')}
							type="text"/>
          </div>
          <div>
            <label className="f6 b db mb2">Markings</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.pet.markings}
							onChange={this.handleChange('markings')}
							type="text"/>
          </div>
          <div>
            <label className="f6 b db mb2">Sex</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.pet.sex}
							onChange={this.handleChange('sex')}
							type="text"/>
          </div> */}
          <div>
            <label className="f6 b db mb2">DOB</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.pet.dob}
							onChange={this.handleChange('dob')}
							type="date"/>
          </div>
          <div>
            <button className="f6 link dim br2 ph3 pv2 mb2 dib black bg-light-gray">Submit</button>
            <Link to="/pets" className="db link ml1">cancel</Link>
          </div>
        </form>
      </div>
      </div>
    )
  }
})

module.exports = PetForm
