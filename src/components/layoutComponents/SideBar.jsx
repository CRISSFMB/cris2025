import { NavLink } from "react-router-dom"


export const SideBar = () => {
    return (
        <SideBarW className="boxshadow">

            <p>Juan Ignacio</p>

            <img src="https://image.lexica.art/full_webp/66f9494f-40b9-42b7-a807-dfea86d4f5f9" alt="astronauta" />


            <Nav>
                <NavLink className={"boxshadow"} to="*">Información Personal</NavLink>
                <NavLink className={"boxshadow"} to="about-me">Sobre mí</NavLink>
                <NavLink className={"boxshadow"} to="education">Estudios</NavLink>
                <NavLink className={"boxshadow"} to="work-experience">Experiencia de trabajo</NavLink>
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
     box-shadow: -4px -3px 8px 0px #c90909, 5px 3px 5px 0px #0e0f0f;
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

