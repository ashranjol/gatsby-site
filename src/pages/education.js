import React from 'react'
import Link from 'gatsby-link'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap'

export default class Education extends React.Component {
  render() {
    return (
      <ListGroup style={{textAlign:'center'}} >

        <ListGroupItem >
          <ListGroupItemHeading>Masters in Computer Science</ListGroupItemHeading>
          <ListGroupItemText>
          University of New Orleans, New Orleans, LA <br/>  <Badge pill style={{fontSize:'15px'}}>2015-2017</Badge>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Bachelors in Information Science</ListGroupItemHeading>
          <ListGroupItemText>
          Basaveshwar Engineering College, Karnataka, India <br/> <Badge pill style={{fontSize:'15px'}}>2011-2015</Badge>
          </ListGroupItemText>
        </ListGroupItem>

      </ListGroup>
    );
  }
}
