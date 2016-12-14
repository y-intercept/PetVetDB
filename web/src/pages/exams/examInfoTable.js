const React = require('react')
const {Table} = require('react-bootstrap')

const ExamInfoTable = ({props}) => (
  <Table responsive>
    <tbody>
      <tr>
        <td>First Look:</td>
        <td>{props.data.exam.appear}</td>
      </tr>
      <tr>
        <td>Temp:</td>
        <td>{props.data.exam.temp}˚F</td>
      </tr>
      <tr>
        <td>Weight:</td>
        <td>{props.data.exam.weight} lbs</td>
      </tr>
      <tr>
        <td>Pulse:</td>
        <td>{props.data.exam.pulse} beats/min</td>
      </tr>
      <tr>
        <td>Respiration:</td>
        <td>{props.data.exam.respiration} breaths/min</td>
      </tr>
      <tr>
        <td>Heart/Lungs:</td>
        <td>{props.data.exam.chest}</td>
      </tr>
    </tbody>
  </Table>
)

module.exports = ExamInfoTable
