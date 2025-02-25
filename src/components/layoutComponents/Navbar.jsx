import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../breakpoints/breakpoints';

const Wrapper = styled.nav`
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    height: 100%;
    padding: 1rem;
    align-items: center;
    border-radius: 2rem;
    display: none;

    @media (min-width: ${breakpoints.laptop}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        height: auto;
  }
    a {
        text-decoration: none;
        color: black;
        margin-right: 1rem;
        border-radius: 3rem;
        padding: 1rem;
        text-align: center;

        @media (min-width: ${breakpoints.laptop}) {
            margin-right: 1;
            padding: 0.5rem 1.5rem;
        }

    }

    .active{
        color : #2dc1db;
    }

    .nav{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 3rem;
        @media (min-width: ${breakpoints.laptop}) {
            flex-direction: row;
            gap: 1rem;
            margin-top: 0;
            padding-top:1rem ;
            padding-bottom:1rem ;
            border-bottom: 3px solid #098fa6;
            border-radius: 2rem; 
            
        }
    }
    .logo{
        text-align: center;
        margin-top: 2rem;
        text-transform: uppercase;
        @media (min-width: ${breakpoints.laptop}) {
            margin-top: 0;
            margin-left: 2rem;
        }
    }
`;

export const Navbar = () => {
    return (
        <Wrapper className='boxshadow' >
            <Link
                to="/"
                className='logo boxshadow'
            >
                LagoAgrioApp
            </Link>

            <div>
                <div className='nav'>

                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""} boxshadow`}
                        to="/"
                    >
                        Inicio
                    </NavLink>



                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""} boxshadow`}
                        to="/jobs"
                    >
                        Buscar Empleo
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""} boxshadow`}
                        to="/about"
                    >
                        About
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""} boxshadow`}
                        to="/login"
                    >
                        login
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""} boxshadow`}
                        to="/register"
                    >
                        Register
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""} boxshadow`}
                        to="/job-submissions"
                    >
                        Postulaciones
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""} boxshadow`}
                        to="/"
                    >
                        logout
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""} boxshadow`}
                        to="/profile"
                    >
                        mi Perfil
                    </NavLink>
                </div>
            </div>


        </Wrapper>
    )
}