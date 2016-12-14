const React = require('react')
const { Table } = require('react-bootstrap')

const PetInfoList = ({props}) => (

    <Table responsive>
      <tbody>
        <tr>
          <td>Name:</td>
          <td>{props.data.pet.name}</td>
        </tr>
        <tr>
          <td>Species:</td>
          <td>{props.data.pet.species}</td>
        </tr>
        <tr>
          <td>Breed:</td>
          <td>{props.data.pet.breed}</td>
        </tr>
        <tr>
          <td>Color:</td>
          <td>{props.data.pet.color}</td>
        </tr>
        <tr>
          <td>Markings:</td>
          <td>{props.data.pet.markings}</td>
        </tr>
        <tr>
          <td>Sex:</td>
          <td>{props.data.pet.sex}</td>
        </tr>
        <tr>
          <td>DOB:</td>
          <td>{props.data.pet.dob}</td>
        </tr>
      </tbody>
    </Table>
  )


module.exports = PetInfoList
