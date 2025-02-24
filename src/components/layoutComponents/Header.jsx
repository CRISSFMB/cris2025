import { breakpoints } from "../../breakpoints/breakpoints"
import { Navbar } from "./Navbar"

import styled from "styled-components"

const HeaderWrapper = styled.header`
position: absolute;
height: auto;
width: 100%;
background-color: #dde1e7;
 @media (min-width: ${breakpoints.laptop}) {
    position: relative;
    margin-top: 0.2rem;
    padding: 1rem;
 }
`

export const Header = () => {
    return (
        <HeaderWrapper>
            <Navbar />
        </HeaderWrapper>
    )
}
