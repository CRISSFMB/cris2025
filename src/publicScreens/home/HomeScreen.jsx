
import styled from 'styled-components';
import { breakpoints } from '../../breakpoints/breakpoints';


const Wrapper = styled.div`
height: auto;
padding: 1rem;
display: flex;
flex-direction: column;
gap: 4rem;

@media (min-width: ${breakpoints.laptop}) {
    flex-direction: row;
}
.text-container{
    font-size: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .first-paragraph{
        color: #09547C;
        @media (min-width: ${breakpoints.laptop}) {
            font-size: 5rem;
        }
    }

    .second-paragraph{
        font-size: 2rem;
        margin-top: 2rem;
        @media (min-width: ${breakpoints.laptop}) {
            font-size: 3rem;
        }
    }
}

.img-container{
    img{
        border-radius: 1rem;
    }
}

`;

export const HomeScreen = () => {
    return (

        <Wrapper className="section-oportunity container">
            <div className="text-container">
                <p className='first-paragraph'>La oportunidad que buscas, en la plataforma que necesitas.</p>
                <p className='second-paragraph'>Encuentra empleos, oportunidades laborales y profesionales para impulsar tu carrera.</p>
            </div>

            <div className='img-container'>
                <img src="https://i.blogs.es/b0e51f/descargar-imagenes-instagram/1366_2000.jpg" alt="" />
            </div>
        </Wrapper>
    )
}
