const React = require('react')
const { Jumbotron, Grid, Col, Row } = require('react-bootstrap')

const About = React.createClass({
  render() {
     return (
         <div>
           <Grid>
             <Row>
               <Col xs={12} md={2}></Col>
               <Col xs={12} md={8}>
                 <Jumbotron className="mt6">
                   <h1 className="tc pb4">PetVetDB</h1>
                   <p className="tc">PetVetDB makes managing records for veterinarians easy. Designed with mobile veterinarians in mind, PetVetDB will work on devices of virtually any size. In the office or on the road, users can view, update, create, and delete pet and owner records on their smart phone, tablet, or desktop computer.</p>
                 </Jumbotron>
               </Col>
               <Col xs={12} md={2}></Col>
             </Row>
           </Grid>
         </div>
      )
  }
})

module.exports = About
