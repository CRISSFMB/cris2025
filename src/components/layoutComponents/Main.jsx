import { Route, Routes } from "react-router-dom"
import { JobSumissionsScreen } from "../../privatScreens/JobSubmissions /JobSumissionsScreen"
import { ScreenLogin } from "../../publicScreens/Authentication/ScreenLogin"
import { ScreenRegister } from "../../publicScreens/Authentication/ScreenRegister"
import { AboutScreen } from "../../publicScreens/about/AboutScreen"
import { JobsScreens } from "../../publicScreens/jobs/JobsScreens"
import { ProfileRouter } from "../../privatScreens/routers/ProfileRouter"
import { HomeScreen } from "../../publicScreens/home/HomeScreen"
import styled from "styled-components"

export const Main = () => {
    return (
        <MainWrapper >
            <Routes>
                <Route path="/job-submissions" element={<JobSumissionsScreen />} />
                <Route path="/login" element={<ScreenLogin />} />
                <Route path="/register" element={<ScreenRegister />} />
                <Route path="/about" element={<AboutScreen />} />
                <Route path="/jobs" element={<JobsScreens />} />
                <Route path="/profile/*" element={<ProfileRouter />} />
                <Route path="/*" element={<HomeScreen />} />
            </Routes>
        </MainWrapper>
    )
}

const MainWrapper = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    `
