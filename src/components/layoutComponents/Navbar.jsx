import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    a {
        text-decoration: none;
        color: white;
        margin-right: 1rem;

    }

    .active{
        color : #24b74b;
    }
`;

export const Navbar = () => {
    return (
        <Wrapper>

            <Link
                to="/"
            >
                LagoAgrioApp
            </Link>

            <div>
                <div>

                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""}`}
                        to="/"
                    >
                        Inicio
                    </NavLink>



                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""}`}
                        to="/jobs"
                    >
                        Buscar Empleo
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""}`}
                        to="/about"
                    >
                        About
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""}`}
                        to="/login"
                    >
                        login
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""}`}
                        to="/register"
                    >
                        Register
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""}`}
                        to="/job-submissions"
                    >
                        Postulaciones
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""}`}
                        to="/"
                    >
                        logout
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `${isActive ? "active" : ""}`}
                        to="/profile"
                    >
                        mi Perfil
                    </NavLink>
                </div>
            </div>


        </Wrapper>
    )
}