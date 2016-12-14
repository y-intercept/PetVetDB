const React = require('react')
const {Panel, Button} = require('react-bootstrap')
const PetInfoList = require('./petInfoList.js')
const {Link} = require('react-router')

const PanelsInstance = (props) => {

  let header = <div className="pv0 mv0">
    <p className="pv0 mv0">
      {props.data.pet.name + " " + props.data.pet.ownerLastName}
    </p>
    <p className="pv0 mv0">
      <Link to={`/owners/${props.data.pet.owner_id}/show`} className="f4 fw3">
        <span>Owner: {props.data.pet.ownerFirstName + " " + props.data.pet.ownerLastName}</span>
      </Link>
    </p>
  </div>

  return (

      <Panel header={header} className="f3 fw3 i b br3 mt2">
        <PetInfoList props={props}/>
        <Button bsStyle="default" className="mh2" onClick={props.onDelete}>Delete</Button>
        <Button bsStyle="default">
          <Link to={`/pets/${props.data.pet._id}/edit`}>Edit</Link>
        </Button>
        <Button bsStyle="default" className="mh2">
          <Link to={`/exams/new?pet_id=${props.data.pet._id}&owner_id=${props.data.pet.owner_id}`}>New Exam</Link>
        </Button>
        <p className="f4 fw3 link fr pa3">
          <Link to="/pets">Cancel</Link>
        </p>
      </Panel>
    )
  }

module.exports = PanelsInstance
