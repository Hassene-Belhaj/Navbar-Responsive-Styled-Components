import React from 'react'
import { CloseIcon, Container,LinkItem,Logo,MenuDiv, MenuIcon, MenuSm, Nav, NavSm} from './Navbar.Style'
import { useState } from 'react'

const Navbar = () => {
   const [toggle , setToggle] = useState(false)
   const handleToggle = () =>setToggle(!toggle)
   const handleClose =() =>setToggle(!toggle)
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

         {toggle ? <MenuIcon onClick={handleToggle} size={30}/>  
         :
          <CloseIcon onClick={handleToggle} size={30}/> }
                
                 
       </Nav>

 <NavSm toggle={toggle}>
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
