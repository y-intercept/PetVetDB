const React = require('react')
const data = require('../../utils/data')()
const { Link } = require('react-router')
const { pluck } = require('ramda')

const Procedures = React.createClass({
	getInitialState() {
		return {
			procedures: []
		}
	},
	componentDidMount() {
		data.list('procedures')
			.then(obj => {
				const procedures = pluck('doc', obj.rows)
				this.setState({procedures})
			})
	},
	render () {
		const li = procedure => <li key={procedure._id}><Link to={`/procedures/${procedure._id}/show`}>{procedure.name}</Link></li>
		return (
			<div className="pa5">
        <span className="f3">Procedures</span>
        <Link to="/procedures/new">New Procedure</Link>
        <ul>
          {this.state.procedures.map(li)}
        </ul>
				<Link to="/">Home</Link>
      </div>
		)
	}
})

module.exports = Procedures
