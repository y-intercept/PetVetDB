const React = require('react')
const data = require('../../utils/data')()
const { Link } = require('react-router')
const { pluck } = require('ramda')

const Exams = React.createClass({
	getInitialState() {
		return {
			exams: []
		}
	},
	componentDidMount() {
		data.list('exams')
			.then(obj => {
				const exams = pluck('doc', obj.rows)
				this.setState({exams})
			})
	},
	render () {
		const li = exam => <li key={exam._id}><Link to={`/exams/${exam._id}/show`}>{exam.date}</Link></li>
		return (
			<div className="pa5">
        <span className="f3">Exams</span>
        <Link to="/exams/new">New Exam</Link>
        <ul>
          {this.state.exams.map(li)}
        </ul>
				<Link to="/">Home</Link>
      </div>
		)
	}
})

module.exports = Exams
