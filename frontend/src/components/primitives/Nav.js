import styled from 'styled-components';


export const NavWrapper = styled.nav`
    height: 100%; 
    width: 0; 
    position: fixed;
    z-index: 1; 
    top: 0;
    left: 0;
    background-color: #52132e; 
    overflow-x: hidden; 
    padding-top: 60px; 
    transition:  0.5s; 

`

export const Link = styled.h1`
    font-size: 1.2rem;
    color: white;
`

export const Hamburger = styled.div`
    position: fixed;
    top: 100px;
    right: 50px;
    padding: 10px;
    border: solid skyblue;
    
`

export const NavUl = styled.ul`
    width: 100%;
    text-align: center;
    /* margin-top: 100px; */
    padding-left: 0;
    margin-left: -10px;
    font-size: 3rem;
    font-weight: 800;
`
export const NavLi = styled.li`
    margin: 40px 0;
`

export const NavText = styled.a `
    text-decoration: none;
    color: white;
    position: relative;
    display: inline-block;
    padding: 10px 0;
    overflow: hidden;




`