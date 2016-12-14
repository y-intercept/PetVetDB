const React = require('react')
const {Panel, Button} = require('react-bootstrap')
const ExamInfoTable = require('./examInfoTable.js')
const {Link} = require('react-router')

const PanelsInstance = (props) => {
  console.log('props', props)

  let header = <div className="pv0 mv0">
    <p className="pv0 mv0">
      <Link to={`/pets/${props.data.exam.pet_id}/show`}>{props.data.exam.petName}</Link><span className="fr">Exam Date: {props.data.exam.date}</span>
    </p>
    <p className="pv0 mv0">
      <Link to={`/owners/${props.data.exam.pet.owner_id}/show`} className="f5 fw3">Owner: {props.data.exam.ownerName}</Link>
    </p>
  </div>

  return (
    <div className="f3 fw3 i mt5">
      <Panel header={header} >
        <ExamInfoTable props={props}/>
        <p className="pl2">Notes: {props.data.exam.notes}</p>
        <Button bsStyle="default" className="mh2" onClick={props.onDelete}>Delete</Button>
        <Button bsStyle="default">
          <Link to={`/exams/${props.data.exam._id}/edit`}>Edit</Link>
        </Button>
        <p className="f4 fw3 link fr pa3">
          <Link to={`/exams`}>Cancel</Link>
        </p>
      </Panel>
    </div>
  )
}

module.exports = PanelsInstance
