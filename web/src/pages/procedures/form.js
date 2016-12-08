const React = require('react')
const data = require('../../utils/data')()
const {Redirect, Link} = require('react-router')

const ProcedureForm = React.createClass({
  getInitialState() {
    return {
      procedure: {
        name: ''
      },
      resolved: false
    }
  },
  componentDidMount() {
    data.get('procedures', this.props.params.id)
    .then(procedure => this.setState({ procedure }))
  },
  handleChange(field) {
    return (e) => {
      let procedure = {...this.state.procedure}
      procedure[field] = e.target.value
      this.setState({procedure})
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.procedure._id) {
      data.post('procedures', this.state.procedure)
      .then(res => this.setState({resolved: true}))
    } else {
      data.put('procedures', this.state.procedure._id, this.state.procedure)
      .then(res => this.setState({resolved: true}))
    }
  },
  render() {
    return (
      <div>
        {this.state.resolved && this.state.procedure._id ? <Redirect to={`/procedures/${this.state.procedure._id}/show`} /> : null}
        {this.state.resolved && !this.state.procedure._id ? <Redirect to="/procedures" /> : null }
        <p className="f3 ma3">Add New Procedure</p>
        <form onSubmit={this.handleSubmit} className="pa3">
          <div>
            <label className="f6 b db mb2">Procedure</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.procedure.name}
							onChange={this.handleChange('name')}
							type="text"/>
          </div>
          <div>
            <label className="f6 b db mb2">Description</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.procedure.description}
							onChange={this.handleChange('description')}
							type="text"/>
          </div>
          <div>
            <label className="f6 b db mb2">Date</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.procedure.date}
							onChange={this.handleChange('date')}
							type="date"/>
          </div>
          <div>
            <label className="f6 b db mb2">Vet</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.procedure.vet}
							onChange={this.handleChange('vet')}
							type="text"/>
          </div>
          <div>
            <label className="f6 b db mb2">Notes</label>
            <input
							className="input-reset ba b--black-20 pa2 mb2 db w-30"
							value={this.state.procedure.notes}
							onChange={this.handleChange('notes')}
							type="text"/>
          </div>
          <div>
            <button className="f6 link dim br2 ph3 pv2 mb2 dib black bg-light-gray">Submit</button>
            <Link to="/procedures" className="db link ml1">cancel</Link>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = ProcedureForm
