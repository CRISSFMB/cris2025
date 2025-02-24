import { NavLink } from "react-router-dom"




export const SideBar = () => {
    return (
        <SideBarW>

            <p>Juan Ignacio</p>

            <img src="https://image.lexica.art/full_webp/66f9494f-40b9-42b7-a807-dfea86d4f5f9" alt="astronauta" />


            <Nav>
                <NavLink to="*">Información Personal</NavLink>
                <NavLink to="about-me">Sobre mí</NavLink>
                <NavLink to="education">Estudios</NavLink>
                <NavLink to="work-experience">Experiencia de trabajo</NavLink>
            </Nav>

        </SideBarW>
    )
}

import styled from "styled-components"


const SideBarW = styled.div` 
   background-color: #e6e6e6;
    width: 100%;
    height: auto;
    padding: 1rem;

    p{
        color: #0a0606;
        text-align: center;
    }
   img{
     width: 19rem;
     height: 19rem;
     border-radius: 50%;
     object-fit: cover;
     margin-top: 1rem;
   }

`

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    
    margin-top: 2rem;
    a{
        background-color: white;
        color: black;
        width: 100%;
        padding: 0.5rem;
        cursor: pointer;
        border-radius: 1rem;
    }
`

