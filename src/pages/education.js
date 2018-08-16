import React from 'react'
import Link from 'gatsby-link'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap'

export default class Education extends React.Component {
  render() {
    return (
      <ListGroup >

        <ListGroupItem >
          <ListGroupItemHeading>Masters in Computer Science</ListGroupItemHeading>
          <ListGroupItemText>
          University of New Orleans, New Orleans, LA  <Badge pill>2017 Class</Badge>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Bachelors in Information Science</ListGroupItemHeading>
          <ListGroupItemText>
          Basaveshwar Engineering College, Karnataka, India <Badge pill>2015 Class</Badge>
          </ListGroupItemText>
        </ListGroupItem>

      </ListGroup>
    );
  }
}
