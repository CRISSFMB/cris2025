
import { Route, Routes } from "react-router-dom"
import { ProfileEducationScreen } from '../profile/profileEducationScreen'
import { ProfilePersonalInfoScreen } from '../profile/profilePersonalInfoScreen'
import { ProfileWorkExperienceScreen } from '../profile/profileWorkExperienceScreen'
import { ProfileAboutmeScreen } from '../profile/profileAboutmeScreen'
import { SideBar } from "../../components/layoutComponents/SideBar"
import styled from "styled-components"

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr;
    height: 100%;

    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const ProfileRouter = () => {
    return (
        <Wrapper>
            <SideBar />
            <div className="center">
                <Routes>
                    <Route path="about-me" element={<ProfileAboutmeScreen />} />
                    <Route path="education" element={<ProfileEducationScreen />} />
                    <Route path="work-experience" element={<ProfileWorkExperienceScreen />} />
                    <Route path="*" element={<ProfilePersonalInfoScreen />} />
                </Routes>
            </div>
        </Wrapper>
    )
}

