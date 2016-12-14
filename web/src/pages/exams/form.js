const React = require('react')
const data = require('../../utils/data')()
const { Redirect, Link } = require('react-router')
const dateformat = require('dateformat')
const { Grid, Row, Col } = require('react-bootstrap')
const FormInstance = require('./formComponent.js')

const ExamForm = React.createClass({
  getInitialState() {
    return {
      exam: {
        date: '',
        pet: {}
      },
      resolved: false,
    }
  },
  componentDidMount() {
    if (this.props.params.id) {
      data.get('exams', this.props.params.id)
        .then(exam => this.setState({ exam }))
    } else {
      data.get('pets', this.props.location.query.pet_id)
       .then(pet => {
        let exam = {...this.state.exam}
        const now = new Date()
        exam.pet = pet
        exam.pet_id = pet._id
        exam.petName = pet.name + ' ' + pet.ownerLastName
        exam.ownerName = pet.ownerFirstName + ' ' + pet.ownerLastName
        exam.date = dateformat(now, "mm/dd/yyyy")
        exam.now = now
        this.setState({exam})
    })
  }
},
  handleChange(field) {
    return (e) => {
      let exam = {...this.state.exam}
      exam[field] = e.target.value
      this.setState({ exam })
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    if (e.charCode || e.keyCode === 13) {
			this.setState({resolved: false})
		}
    if (!this.state.exam._id) {
      data.post('exams', this.state.exam)
      .then(res => this.setState({resolved: true}))
    } else {
      data.put('exams', this.state.exam._id, this.state.exam)
      .then(res => this.setState({resolved: true}))
    }
  },
  render() {
    return (
      <div className="mt4">
				{this.state.resolved && this.state.exam._id ? <Redirect to={`/exams/${this.state.exam._id}/show`} /> : null}
				{this.state.resolved && !this.state.exam._id ? <Redirect to="/exams" /> : null }
				<Grid>
					<Row>
						<Col xs={12} md={4}></Col>
						<Col xs={11} md={4}>
              <p className="f2">Exam for {this.state.exam.petName}</p>
							<FormInstance data={this.state.exam} change={this.handleChange} submit={this.handleSubmit} />
						</Col>
            <Col xs={12} md={4}></Col>

					</Row>
				</Grid>
			</div>
		)
	}
})



//       <div>
//         {this.state.resolved && this.state.exam._id ? <Redirect to={`/exams/${this.state.exam._id}/show`} /> : null}
//         {this.state.resolved && !this.state.exam._id ? <Redirect to="/exams" /> : null }
//         <p className="f3 ma3 db">New Exam</p>
//         <form onSubmit={this.handleSubmit} className="pa3">
//           <div>
//             <label className="f6 b db mb2">First Look</label>
//             <input
// 							className="input-reset ba b--black-20 pa2 mb2 db w-30"
// 							value={this.state.exam.appear}
// 							onChange={this.handleChange('appear')}
// 							type="text"/>
//           </div>
//           <div>
//             <label className="f6 b db mb2">Temperature</label>
//             <input
// 							className="input-reset ba b--black-20 pa2 mb2 w-30"
// 							value={this.state.exam.temp}
// 							onChange={this.handleChange('temp')}
// 							type="text"/>
//               <span> ˚F</span>
//           </div>
//           <div>
//             <label className="f6 b db mb2">Pulse</label>
//             <input
// 							className="input-reset ba b--black-20 pa2 mb2 w-30"
// 							value={this.state.exam.pulse}
// 							onChange={this.handleChange('pulse')}
// 							type="text"/>
//               <span> beats/min</span>
//           </div>
//           <div>
//             <label className="f6 b db mb2">Respiration</label>
//             <input
// 							className="input-reset ba b--black-20 pa2 mb2 w-30"
// 							value={this.state.exam.respiration}
// 							onChange={this.handleChange('respiration')}
// 							type="text"/>
//               <span> breaths/min</span>
//           </div>
//           <div>
//             <label className="f6 b db mb2">Weight</label>
//             <input
// 							className="input-reset ba b--black-20 pa2 mb2  w-30"
// 							value={this.state.exam.weight}
// 							onChange={this.handleChange('weight')}
// 							type="text"/>
//               <span> lbs</span>
//           </div>
//           <div>
//             <label className="f6 b db mb2">Heart/Lungs</label>
//             <input
// 							className="input-reset ba b--black-20 pa2 mb2 db w-30"
// 							value={this.state.exam.chest}
// 							onChange={this.handleChange('chest')}
// 							type="text"/>
//           </div>
//           <div>
//             <label className="f6 b db mb2">Notes</label>
//             <input
// 							className="input-reset ba b--black-20 pa2 mb2 db w-30"
// 							value={this.state.exam.notes}
// 							onChange={this.handleChange('notes')}
// 							type="text"/>
//           </div>
//           <div>
//             <button className="f6 link dim br2 ph3 pv2 mb2 dib black bg-light-gray">Submit</button>
//             <Link to="/exams" className="db link ml1">cancel</Link>
//           </div>
//         </form>
//       </div>
//     )
//   }
// })

module.exports = ExamForm
