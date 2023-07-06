import React from 'react'
import { CloseIcon, Container,LinkItem,Logo,MenuDiv, MenuIcon, MenuSm, Nav, NavSm} from './Navbar.Style'
import { useState } from 'react'

const Navbar = () => {
   const [show , setShow] = useState(true)
   const handleToggle = () =>setShow(!show)
   const handleClose =() =>setShow(!show)
  return (
    <Container>
       <Nav>
            <Logo>
                <h2>React.</h2>

            </Logo>
             
             <MenuDiv>
                <LinkItem>lorem</LinkItem>    
                <LinkItem>ipsum</LinkItem>    
                <LinkItem>dolor</LinkItem>  
             </MenuDiv>

         {show ? <MenuIcon onClick={handleToggle} size={30}/>  
         :
          <CloseIcon onClick={handleToggle} size={30}/> }
                
                 
       </Nav>

         <NavSm show={show ? 1 : 0}>
                  <MenuSm>
                     <LinkItem onClick={handleClose}>lorem</LinkItem>    
                     <LinkItem onClick={handleClose}>ipsum</LinkItem>    
                     <LinkItem onClick={handleClose}>dolor</LinkItem> 
                  </MenuSm>  
         </NavSm>   
   
    </Container>
    )
}

export default Navbar
