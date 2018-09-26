import React from 'react'
import Link from 'gatsby-link'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
const Experience = () => (
  <div>
  <Card>
    <CardBody>
          <CardTitle style={{textAlign:'center',fontSize:'21px'}}>Quality Systems Developer</CardTitle>
          <CardSubtitle style={{textAlign:'center',fontSize:'15px'}}>Rheem Manufacturing Company</CardSubtitle>
          <CardText>
          <ul style={{textAlign:'justify',fontSize:'14px'}}>
          <li>Leading a development team consisting of 3 members.</li>
          <li>Developed applications to monitor supplier performance and failure analysis.</li>
          <li>Created dashboard for quality team using Python, SQL and Bootstrap dashboards.</li>
          <li>Also designed and created infrastructure for data input validation for improved production results.</li>
          <li>Implemented software development best practices to make development more robust and faster.</li>
          <li>Successfully integrated applications with SUGAR CRM (a customer service solution).</li>
          <li>Developed applications to interact with Econet (water heater sensor) API.</li>
          <li>Currently working on customer review data to perform sentimental analysis using python and provide graphs.</li>
          </ul>
          </CardText>

        </CardBody>
  </Card>
  <br/>
  <Card>
  <CardBody>
        <CardTitle style={{textAlign:'center',fontSize:'21px'}}>Graduate Assistant </CardTitle>
        <CardSubtitle style={{textAlign:'center',fontSize:'15px'}}>University of New Orleans</CardSubtitle>
        <CardText>
        <ul style={{textAlign:'justify',fontSize:'14px'}}>
          <li>Actively involved in designing the student recruiting portal to reduce the excessive paperwork done by the staff.</li>
          <li>Assisted the Associate Directors with numerous higher level administrative planning decisions.</li>
          <li>Updated the automated transfer credit system portal.</li>
          <li>Designed queries and developed stored procedures for data requests and admission functions.</li>
          <li>Led a team of 4 developers to redesign and update the enrollment department website.</li>
        </ul>
        </CardText>

    </CardBody>
  </Card>
  <br/>
  <Card>
  <CardBody>
        <CardTitle style={{textAlign:'center',fontSize:'21px'}}>Intern Web Developer</CardTitle>
        <CardSubtitle style={{textAlign:'center',fontSize:'15px'}}>MV Data Systems</CardSubtitle>
        <CardText>
        <ul style={{textAlign:'justify',fontSize:'14px'}}>
        <li>Collaborated with 10 members of the development team to design responsive website and web applications.</li>
        <li>Utilized HTML, CSS and Javascript on 80% of project completion with Java as back end.</li>
        <li>Helped the team to the front end and back-end engineering efforts using Javascript.</li>
        <li>Implemented web-based functions to support business requirements.</li>
        <li>Actively involved in the application design, development, implementation and deployment.</li>

        </ul>
        </CardText>
        
  </CardBody>
  </Card>
  <br/>
  </div>
)

export default Experience
