

import styled from "styled-components"

const FooterWrapper = styled.footer`
    padding: 1rem;
    background-color: black;
    color: white;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Footer = () => {
    return (
        <FooterWrapper>
            <h1>footer</h1>
        </FooterWrapper>
    )
}
