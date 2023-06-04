import { styled } from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
width: 100%;
height: 100vh;
background: lightgray;
`

export const Nav  = styled.nav`
width: 100%;
height: 60px;
background: #000;
display: flex;
justify-content: space-between;
align-items: center;
`
export const Logo  = styled.nav`
width: 150px;
height: auto;
color: #fff;
padding-left: 2rem;
`
export const MenuDiv =styled.div`
width: 50%;
height: auto;
display: flex;
justify-content: flex-end;
align-items: center;
padding-right: 2rem;
`


export const LinkItem  = styled(Link)`
color: #fff;
text-decoration: none;
margin-right:2rem;
`