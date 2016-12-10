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
		const li = exam =>
			<tr key={exam._id}><Link to={`/exams/${exam._id}/show`}>
				<td className="pa3">{exam.date}</td>
				<td className="pa3">Fluffy</td>
				<td className="pa3">John Lennon</td>
			</Link></tr>

		return (
			<div className="pa5">
        <span className="f3">Exams</span>
        <Link to="/exams/new">New Exam</Link>
        <table>
					<tbody>
						<tr>
							<td>#</td>
							<td>date</td>
							<td>patient</td>
							<td>owner</td>
						</tr>
          	{this.state.exams.map(li)}
					</tbody>
        </table>
				<pre>{JSON.stringify(this.state.exams, null, 2)}</pre>
				<Link to="/">Home</Link>
      </div>
		)
	}
})

module.exports = Exams
