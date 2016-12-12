const React = require('react')
const { Panel, Button } = require('react-bootstrap')
const PetInfoList = require('./petInfoList.js')
const { Link } = require('react-router')


const PanelsInstance = ({ data, onDelete }) => (
  <div>
    <Panel header={data.name + " " + data.ownerLastName} className="f3 fw3 i mv4">
			<PetInfoList data={data} />
			<Button bsStyle="default" className="mh2" onClick={onDelete}>Delete</Button>
			<Button bsStyle="default"><Link to={`/pets/${data._id}/edit`}>Edit</Link></Button>
			<p className="f4 fw3 link fr pa3"><Link to="/pets">Cancel</Link></p>
    </Panel>
  </div>
)

module.exports = PanelsInstance
