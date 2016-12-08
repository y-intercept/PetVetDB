const React = require('react')
const { Link } = require('react-router')
const data = require('../../utils/data')()
const { pluck } = require('ramda')

const Owners = React.createClass({
  getInitialState() {
    return {
      owners: []
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
    const li = owner => <li key={owner._id}><Link to={`/owners/${owner._id}/show`}>{owner.lastName}, {owner.firstName}</Link></li>
    return (
      <div className="pa5">
        <span className="f3">Owners</span>
        <Link to="/owners/new">New Owner</Link>
        <ul>
          {this.state.owners.map(li)}
        </ul>
        <Link to="/">Home</Link>
      </div>
    )
  }
})

module.exports = Owners
