import { styled } from "styled-components";
import { Link } from 'react-router-dom'
import {AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai'

export const Container = styled.div`
width: 100%;
height: 100vh;
background: #e8e8e8;
position: relative;
z-index: 10;
`

export const Nav  = styled.nav`
width: 100%;
height: 60px;
background: #000;
display: flex;
justify-content: space-between;
align-items: center;
`
export const Logo  = styled(Link)`
width: 150px;
height: auto;
color: #fff;
padding-left: 2rem;
z-index: 200;
text-decoration: none;
`
export const MenuDiv =styled.div`
width: 50%;
height: auto;
display: flex;
justify-content: flex-end;
align-items: center;
padding-right: 2rem;
@media screen and (max-width : 768px) {
 display    :none ;
}
`
export const LinkItem  = styled(Link)`
color: #fff;
text-decoration: none;
font-size: 1.2rem;
margin-right:2rem;
padding-bottom: 0.2rem;
&:hover{
    border-bottom: 2px solid #fff;

}
@media screen and (max-width : 768px) {
margin-right    : 0;
}
`

export const NavSm = styled.div`
display: none;
@media screen and (max-width :768px){
width: 100%;
height: 100vh;
background: #000;
position: absolute;
top: 0;
bottom: 0;
left: ${({toggle})=>toggle ? "-100%" : 0};
transition: all 0.3s ease-in-out;
z-index: 20;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
`

export const LinkItemSm  = styled(Link)`
color: #fff;
text-decoration: none;
font-size: 1.2rem;
`



export const MenuSm = styled.div`
width: 100%;
height:20%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`




export const MenuClose= styled.div`
height:100%;
width: 100%;
`



export const MenuIcon = styled(AiOutlineMenu)`
fill: #fff ; 
display: none;
z-index: 50;
@media screen and (max-width : 768px) {
display    :block ;
position: absolute;
top: 5;
right: 0;
margin-right: 2rem;
}
`

export const CloseIcon = styled(AiOutlineClose)`
fill: #fff ; 
display: none;
z-index: 50;
@media screen and (max-width : 768px) {
display    :block ;
position: absolute;
top: 5;
right: 0;
margin-right: 2rem;
}
`
