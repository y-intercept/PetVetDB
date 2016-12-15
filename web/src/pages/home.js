const React = require('react')
const { Link } = require('react-router')
const { Grid, Row, Col, Panel, Image } = require('react-bootstrap')

const Home = React.createClass({
  render() {
     return (
       <div className="mv6">
       <Grid>
         <Row>
           <Col xs={12} md={3}></Col>
           <Col xs={12} md={2}>
             <Panel header="Owners" className="f2 tc">
               <Link to="/owners"><Image className="v-mid" src="https://cldn0.fiverrcdn.com/fiverr/t_profile_original/profile/photos/67582/original/Mix_race_group_of_people2.jpg" rounded /></Link>
             </Panel>
             </Col>
             <Col xs={12} md={2}>
             <Panel header="Pets" className="f2 tc">
               <Link to="/pets"><Image className="v-mid" src="http://virtrador.com/image/cache/data/Categories/pets-250x250.jpg" rounded /></Link>
             </Panel>
             </Col>
             <Col xs={12} md={2}>
             <Panel header="Exams" className="f2 tc">
               <Link to="/exams"><Image className="v-mid" src="http://d2ch1jyy91788s.cloudfront.net/buyemp/images/product/11230967VeridianNurseStethoscope-250_250.jpg" rounded /></Link>
             </Panel>
           </Col>
           <Col xs={12} md={3}></Col>
         </Row>
       </Grid>
     </div>
    )
  }
})

module.exports = Home
