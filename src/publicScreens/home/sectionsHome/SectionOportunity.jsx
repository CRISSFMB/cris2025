
import styled from 'styled-components';
import { breakpoints } from '../../../breakpoints/breakpoints';
/*images home*/
import personHome from "../../../assets/home/personHome.svg"
/*colors*/
import { colors } from '../../../colors.js';



export const SectionOportunity = () => {
    return (<Wrapper
        className="section-oportunity" >
        <div className="text-container" >
            <h3 className='first-paragraph'
            >La oportunidad que buscas, en la plataforma que necesitas.</h3>
            <p className='second-paragraph'
            >Encuentra empleos, oportunidades laborales y profesionales para impulsar tu carrera.</p>
        </div>

        <div className='img-container'>
            <img src={personHome} alt="persona estadistica" />
        </div>
    </Wrapper>)
}

const Wrapper = styled.div` 
height: auto;
padding: 1rem;
display: flex;
flex-direction: column;
gap: 4rem;
color: ${colors.TitleBlue};

@media (min-width: ${breakpoints.laptop}) {
    flex-direction: row;
}

.text-container {
    font-size: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
 
    .first-paragraph {
        font-size: ${colors.TitleSizeMobile};
        
        @media (min-width: ${breakpoints.laptop}) {
            font-size: ${colors.TitleSizeLaptop};
        }
    }

    .second-paragraph {
        font-size: ${colors.SubtitleMobile};
        margin-top: 2rem;

        @media (min-width: ${breakpoints.laptop}) {
            font-size: ${colors.SubtitleLaptop};
        }
    }
}

.img-container {
    img {
        border-radius: 1rem;
    }
}
`;