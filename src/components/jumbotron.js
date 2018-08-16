import React from 'react'
import Link from 'gatsby-link'
import JumbotronMenu from './JumbotronMenu'
import { Jumbotron, Button } from 'reactstrap';

const PageHead = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{textAlign:'center'}}>
      <h1>ASHWATH RANJOL</h1>
      <p>Software Developer at Rheem Manufacturing</p>
      <br/>
      <div style={{paddingLeft:"250px"}}>
      <JumbotronMenu style={{textAlign:'center'}} />
      </div>
      </Jumbotron>
    </div>
  );
};

export default PageHead;
