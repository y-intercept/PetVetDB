const React = require('react')
const { Link } = require('react-router')
const { Table } = require('react-bootstrap')
const dateformat = require('dateformat')
const ageCalculator = require('age-calculator')

const TableInstance = React.createClass({
	render() {

	const table = ((exam, index) => <tr key={exam._id}>
			<td>{index + 1}</td>
			<td><Link className="link" to={`/exams/${exam._id}/show?owner_id=${exam.pet.owner_id}`}>{dateformat(exam.date, "mm/dd/yyyy")}</Link></td>
			<td><Link className="link" to={`/pets/${exam.pet._id}/show`}> {exam.pet.name}</Link></td>
			<td>{exam.pet.species}</td>
			<td>{ageCalculator.getAge(exam.pet.dob)}</td>
			<td>{exam.pet.dob}</td>
			<td ><Link className="link" to={`/owners/${exam.pet.owner_id}/show`}>{exam.ownerName}</Link></td>
		</tr>)

return (
	<Table responsive>
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
			{this.props.data.exams.map(table)}
		</tbody>
	</Table>
	)
}
})

module.exports = TableInstance
