const React = require('react')
const { Table } = require('react-bootstrap')

const PetInfoList = ({data}) => (
      <Table responsive>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Species:</td>
            <td>{data.species}</td>
          </tr>
          <tr>
            <td>Breed:</td>
            <td>{data.breed}</td>
          </tr>
          <tr>
            <td>Color:</td>
            <td>{data.color}</td>
          </tr>
          <tr>
            <td>Markings:</td>
            <td>{data.markings}</td>
          </tr>
          <tr>
            <td>Sex:</td>
            <td>{data.sex}</td>
          </tr>
					<tr>
            <td>DOB:</td>
            <td>{data.sob}</td>
          </tr>
        </tbody>
      </Table>
    )

module.exports = PetInfoList
