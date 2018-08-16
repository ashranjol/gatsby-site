import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div>
  <Image />

  <ul
  style={{listStyleType:'none',
          margin:'0',
          padding:'5',
          overflow:'hidden',
          backgroundColor:'grey'
        }}
  >
  <li style={{float:'left',padding:'3'}}><h4><Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link></h4></li>
  <li style={{float:'left',padding:'3'}}><h4><Link to="/experience/" style={{textDecoration:'none',color:'white'}}>Experience</Link></h4></li>
  <li style={{float:'left',padding:'3'}}><h4><Link to="/education/" style={{textDecoration:'none',color:'white'}}>Education</Link></h4></li>
  <li style={{float:'left',padding:'3'}}><h4><Link to="/contact/" style={{textDecoration:'none',color:'white'}}>Contact</Link></h4></li>


  </ul>
  </div>
)

export default Menu
