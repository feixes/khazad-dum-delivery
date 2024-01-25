import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { LandingRoutes } from "../landing/routes/LandingRoutes"



export const AppRouter = () => {
    return (
        <Routes>
            <Route path='auth/*' element={<AuthRoutes />} />
            <Route path='/*' element={<LandingRoutes />} />
        </Routes>
    )
}
