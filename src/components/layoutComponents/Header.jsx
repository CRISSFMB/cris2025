import { Navbar } from "./Navbar"

import styled from "styled-components"

const HeaderWrapper = styled.header`
    background-color: black;
    color: white;
    height: 7rem;
`

export const Header = () => {
    return (
        <HeaderWrapper>
            <Navbar />
        </HeaderWrapper>
    )
}
