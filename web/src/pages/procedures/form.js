const React = require('react')
const data = require('../../utils/data')()
const {Redirect, Link} = require('react-router')

const ExamForm = React.createClass({
  getInitialState() {
    return {
      exam: {
        name: ''
      },
      resolved: false
    }
  },
  componentDidMount() {
    data.get('exams', this.props.params.id)
    .then(exam => this.setState({ exam }))
  },
  handleChange(field) {
    return (e) => {
      let exam = {...this.state.exam}
      exam[field] = e.target.value
      this.setState({exam})
    }
  },
  handleSubmit(e) {
    e.preventDefault()
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
      <div>
        {this.state.resolved && this.state.exam._id ? <Redirect to={`/exams/${this.state.exam._id}/show`} /> : null}
        {this.state.resolved && !this.state.exam._id ? <Redirect to="/exams" /> : null }
        <p className="f3 ma3">Exam Form</p>
        <form onSubmit={this.handleSubmit} className="pa3">
          <div>
            <label className="f6 b db mb2">First Look</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.exam.appear}
							onChange={this.handleChange('appear')}
							type="text"/>
          </div>
          <div>
            <label className="f6 b db mb2">Temperature</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 w-30"
							value={this.state.exam.temp}
							onChange={this.handleChange('temp')}
							type="text"/>
              <span> ˚F</span>
          </div>
          <div>
            <label className="f6 b db mb2">Pulse</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 w-30"
							value={this.state.exam.pulse}
							onChange={this.handleChange('pulse')}
							type="text"/>
              <span> beats/min</span>
          </div>
          <div>
            <label className="f6 b db mb2">Respiration</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 w-30"
							value={this.state.exam.respiration}
							onChange={this.handleChange('respiration')}
							type="text"/>
              <span> breaths/min</span>
          </div>
          <div>
            <label className="f6 b db mb2">Weight</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2  w-30"
							value={this.state.exam.weight}
							onChange={this.handleChange('weight')}
							type="text"/>
              <span> lbs</span>
          </div>
          <div>
            <label className="f6 b db mb2">Heart/Lungs</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.exam.chest}
							onChange={this.handleChange('chest')}
							type="text"/>
          </div>
          <div>
            <label className="f6 b db mb2">Notes</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.exam.notes}
							onChange={this.handleChange('notes')}
							type="text"/>
          </div>
          <div>
            <button className="f6 link dim br2 ph3 pv2 mb2 dib black bg-light-gray">Submit</button>
            <Link to="/exams" className="db link ml1">cancel</Link>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = ExamForm
