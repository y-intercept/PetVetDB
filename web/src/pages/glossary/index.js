const React = require('react')
const { Link } = require('react-router')
const data = require('../../utils/data')()
const { pluck } = require('ramda')

const Glossary = React.createClass({
  getInitialState() {
    return {
      glossary: []
    }
  },
  componentDidMount() {
    data.list('glossary')
      .then(obj => {
				let glossary = pluck('doc', obj.rows)
				this.setState({ glossary })
			})
  },
  render () {
    const li = entry => <li key={entry._id}><Link to={`/glossary/${entry._id}/show`}>{entry.name}</Link></li>
    return (
      <div className="pa5">
        <h1 className="f3">Glossary</h1>
        <Link to="/glossary/new">New Entry</Link>
        <ul>
          {this.state.glossary.map(li)}
        </ul>
        <Link to="/">Home</Link>
      </div>
    )
  }
})

module.exports = Glossary
