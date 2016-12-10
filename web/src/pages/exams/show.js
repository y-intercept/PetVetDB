const React = require('react')
const { Link, Redirect } = require('react-router')
const data = require('../../utils/data')()

const ShowPet = React.createClass ({
	getInitialState() {
		return {
			exam: {},
			removed: false,
			error: false
		}
	},
	componentDidMount() {
		data.get('exams', this.props.params.id)
		.then(exam => {
			console.log(exam)
			return exam
		})
			.then(exam => this.setState({ exam }))
			.catch(err => this.setState({error: true}))
	},
	handleRemove(e) {
		e.preventDefault()
		if (confirm('Are you sure?')) {
		data.remove('exams', this.props.params.id, this.state.exam)
			.then(res => this.setState({ removed: true}))
		}
	},
	render() {
		const card = exam => {
		  // <div className="fl w-70 h-75 pa2 mt3 dib ml7 bl b--mid-gray">
		  //   <div className="fl w-50 h-40 pa2">
		  //       <div className="f3 fw4 bb b--mid-gray fl">Name</div>
			// 			<div className="fr ba b--mid-gray pb1">PIC</div>
		  //       <div className="f5 fw2 i">Owner: ...</div>
		  //       <table className="mt3">
			// 				<tbody>
			// 					<tr>
			// 						<td className="w4 pt1">Temp: </td>
			// 						<td className="w4 pt1">{this.state.exam.temp}</td>
			// 					</tr>
			// 					<tr>
			// 						<td className="w4 pt1">Weight: </td>
			// 						<td className="w4 pt1">{this.state.exam.weight}</td>
			// 					</tr>
			// 					<tr>
			// 						<td className="w4 pt1">Pulse: </td>
			// 						<td className="w4 pt1">{this.state.exam.pulse}</td>
			// 					</tr>
			// 					<tr>
			// 						<td className="w4 pt1">Breath: </td>
			// 						<td className="w4 pt1">{this.state.exam.breath}</td>
			// 					</tr>
			// 					<tr>
			// 						<td className="w4 pt1">Respiration: </td>
			// 						<td className="w4 pt1">{this.state.exam.respiration}</td>
			// 					</tr>
			// 					<tr>
			// 						<td className="w4 pt1">Heart/Lungs: </td>
			// 						<td className="w4 pt1">{this.state.exam.chest}</td>
			// 					</tr>
			// 				</tbody>
			// 			</table>
			// 			<div className="w-50 pv3">{this.state.exam.notes}</div>
		  //     </div>
			// 		<div className="w-10 h-75 pa2"></div>
		  //   </div>
		}
		return (
			<div>
				{this.state.error ? <Redirect to="/exams" /> : null}
				{this.state.removed ? <Redirect to="/exams" /> : null}
				<div className="fl w-40 h-75 pa2 mt3 db ml7 ba br1 b--mid-gray db">
			    <div className="fl w-90 h-40 pa2">
			        <div className="f3 w-100 fw4 bb b--mid-gray fl pb1">Name</div>
			        <div className="f5 fw2 i pt2">Owner: ...</div>
			        <table className="mt3">
								<tbody>
									<tr>
										<td className="w5 f2 pt1">Temp: </td>
										<td className="w5 f2 pt1">{this.state.exam.temp}</td>
									</tr>
									<tr>
										<td className="w5 f2 pt1">Weight: </td>
										<td className="w5 f2 pt1">{this.state.exam.weight}</td>
									</tr>
									<tr>
										<td className="w5 f2 pt1">Pulse: </td>
										<td className="w5 f2 pt1">{this.state.exam.pulse}</td>
									</tr>
									<tr>
										<td className="w5 f2 pt1">Breath: </td>
										<td className="w5 f2 pt1">{this.state.exam.breath}</td>
									</tr>
									<tr>
										<td className="w5 f2 pt1">Respiration: </td>
										<td className="w5 f2 pt1">{this.state.exam.respiration}</td>
									</tr>
									<tr>
										<td className="w5 f2 pt1">Heart/Lungs: </td>
										<td className="w5 f2 pt1">{this.state.exam.chest}</td>
									</tr>
								</tbody>
							</table>
							<div className="w-50 pv3">{this.state.exam.notes}</div>
			      </div>
						<div className="w-10 h-75 pa2"></div>
						<button className="fr db f5 link dim br2 ph4 pv2 mb2 dib black bg-light-gray"><Link to={`/exams/${this.state.exam._id}/edit`}>Edit</Link></button>
						<Link className="fr v-mid pr2 mt2" to="/exams">cancel</Link>
						<Link className="fr v-mid pr2 mt2" to="/">Home</Link>
			    </div>
				{/* <h2>Show Exam</h2>
				<ul>
					{this.state.exam.map(card)}
				</ul>
				{/* <button onClick={this.handleRemove}>Delete</button> */}


			</div>
		)
	}
})

module.exports = ShowPet
