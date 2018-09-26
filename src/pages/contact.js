import React from 'react'
import Link from 'gatsby-link'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
const Contact = () => (
  <div>
    <Card style={{textAlign:'center'}}>
    <CardTitle><h2>Lets connect on Linkedin</h2></CardTitle>
    <CardBody>
    <div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="ashwathreddyranjol"><a class="LI-simple-link" href='https://www.linkedin.com/in/ashwathreddyranjol?trk=profile-badge'>Ashwath Ranjol</a></div>
    </CardBody>
    </Card>
  </div>
)

export default Contact
