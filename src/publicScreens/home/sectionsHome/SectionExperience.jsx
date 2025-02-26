import styled from 'styled-components';
import { breakpoints } from '../../../breakpoints/breakpoints';
import experienceFoto from "../../../assets/home/experience.png"
import { colors } from '../../../colors';

export const SectionExperience = () => {
    return (
        <Wrapper>
            <div className='image-container'>
                <img src={experienceFoto} alt="" />
            </div>
            <div className='experience-container'>
                <h2>Creamos experiencias unicas</h2>
                <p>Te ayudamos a encontrar el empleo perfecto y a conectar con empresas que valoran tu talento. El primer paso hacia el éxito.</p>
                <ul>
                    <li>Futuros con posibilidades</li>
                    <li>Estabilidad y crecimiento</li>
                    <li>Oportunidades que transforman</li>
                </ul>
                <button>Sobre Nosotros</button>
            </div>


        </Wrapper>
    )
}



const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    padding: 1rem;
   
    .image-container{
        order: 2;
        img{

        }

    }

    .experience-container{
        order: 1;
        h2{
           color: ${colors.TitleBlue};
           font-size: ${colors.TitleSizeMobile};
        }

    }

  @media (min-width: ${breakpoints.laptop}) {

  }

`;
// const Wrapper = styled.div`

//   @media (min-width: ${breakpoints.laptop}) {

//   }

// `;