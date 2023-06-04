import React from 'react'
import { Container,LinkItem,Logo, MenuDiv, Nav,} from './Navbar.Style'

const Navbar = () => {
  return (
    <Container>
       <Nav>
            <Logo>
                <h2>React.</h2>
            </Logo>
             
             <MenuDiv>
                <LinkItem>lorem</LinkItem>    
                <LinkItem>lorem</LinkItem>    
                <LinkItem>lorem</LinkItem>    
             </MenuDiv>

       </Nav>
    </Container>
    )
}

export default Navbar