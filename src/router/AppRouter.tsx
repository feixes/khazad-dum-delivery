import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { LandingRoutes } from "../landing/routes/LandingRoutes"
import { ScrollToTop } from "../ui/assets/ScrollToTop"


export const AppRouter = () => {
    return (
        <ScrollToTop>

            <Routes>

                <Route path='auth/*' element={<AuthRoutes />} />
                <Route path='/*' element={<LandingRoutes />} />

            </Routes>

        </ScrollToTop>
    )
}
