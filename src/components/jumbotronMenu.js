import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Link from 'gatsby-link'
export default class JumbotronMenu extends React.Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>

        <Nav >
          <NavItem>
            <Link to="/" style={{textDecoration:'none',color:'blue',padding:'50px'}}>Home</Link>
          </NavItem>
          <NavItem>
          <Link to="/experience/" style={{textDecoration:'none',color:'blue',padding:'50px'}}>Background</Link>

          </NavItem>
          <NavItem>
          <Link to="/education/" style={{textDecoration:'none',color:'blue',padding:'50px'}}>Education</Link>

          </NavItem>
          <NavItem>
          <Link to="/contact/" style={{textDecoration:'none',color:'blue',padding:'50px'}}>Contact</Link>

          </NavItem>
        </Nav>

      </div>
    );
  }
}
