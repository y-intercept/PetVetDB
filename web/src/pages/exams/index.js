const React = require('react')
const data = require('../../utils/data')()
const {Link} = require('react-router')
const dateformat = require('dateformat')
const {compose, filter, pluck} = require('ramda')
var ageCalculator = require('age-calculator');

const Exams = React.createClass({
  getInitialState() {
    return {
			// pets: [],
			exams: []
		}
  },
  componentDidMount() {
    // data.list('pets')
		// 	.then(obj => {
	  //     const pets = pluck('doc', obj.rows)
		// 		this.setState({ pets })
		// 	})
    data.list('exams')
			.then(item => {
      	const exams = pluck('doc', item.rows)
				this.setState({exams})
	    })
			//
			// .then(item => {
	    //   filter(item => item.pet_id === this.state.pets._id)
	    // })
			// .then(exams => {
	    //   console.log('exams', exams)
	    //   return exams
	    // })
			// .then(exams => this.setState({exams}))

  },
  // data.list('pets')
  // 	.then(obj => {
  // 		const pet = compose(
  // 		filter(item => item._id === this.state.exams.pet_id),
  // 		pluck('doc')
  // 		)(obj.rows)
  // 	})
  // 	.then(exams.pet = pet)
  // 	.then(this.setState({ exams }))

  render() {
    const table = exam => <tr key={exam._id}>
			<td>{}</td>
      <td className="w5 pv3 bb b--mid-gray f3 fw6"><Link className="link" to={`/exams/${exam._id}/show`}>{dateformat(exam.date, "mm/dd/yyyy")}</Link></td>
      <td className="w5 pv3 bb b--mid-gray f3 fw6"><Link className="link" to={`/pets/${exam.pet._id}/show`}> {exam.pet.name}</Link></td>
			<td className="w5 pv3 bb b--mid-gray f3 fw6">{exam.pet.species}</td>
			<td className="w5 pv3 bb b--mid-gray f3 fw6">{ageCalculator.getAge(dateformat(exam.pet.dob, "mm/dd//yyyy"))}</td>
			<td className="w5 pv3 bb b--mid-gray f3 fw6">{dateformat(exam.pet.dob, "mm/dd/yyyy")}</td>
			<td className="w5 pv3 bb b--mid-gray f3 fw6"><Link className="link" to={`/owners/${exam.pet.owner_id}/show`}>{exam.pet.ownerName}</Link></td>
    </tr>

		console.log('exams', this.state.exams)

    return (
      <div className="pa5">
        <span className="f3">Exams</span>
        <Link to="/exams/new">New Exam</Link>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th className="w5 pb2 bb b b--mid-gray">Date</th>
              <th className="w5 pb2 bb b b--mid-gray">Patient</th>
              <th className="w5 pb2 bb b b--mid-gray">Species</th>
              <th className="w5 pb2 bb b b--mid-gray">Age</th>
							<th className="w5 pb2 bb b b--mid-gray">DOB</th>
              <th className="w5 pb2 bb b b--mid-gray">Owner</th>
            </tr>
          </thead>
          <tbody>
            {this.state.exams.map(table)}
          </tbody>
        </table>
        <pre>{JSON.stringify(this.state.exams, null, 2)}</pre>
        <Link to="/">Home</Link>
      </div>
    )
  }
})

module.exports = Exams
