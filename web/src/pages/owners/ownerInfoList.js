const React = require('react')
const { Table } = require('react-bootstrap')

const OwnerInfoList = ({data}) => (
      <Table responsive>
        <tbody>
          <tr>
            <td>First Name:</td>
            <td>{data.firstName}</td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>{data.lastName}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{data.address}</td>
          </tr>
          <tr>
            <td>City:</td>
            <td>{data.city}</td>
          </tr>
          <tr>
            <td>State:</td>
            <td>{data.state}</td>
          </tr>
          <tr>
            <td>Zip Code:</td>
            <td>{data.zip}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td>Phone Number:</td>
            <td>{data.phone}</td>
          </tr>
        </tbody>
      </Table>
    )

module.exports = OwnerInfoList
