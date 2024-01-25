import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage, ContactPage, DetailedPage, HomePage } from "../pages"


export const LandingRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/details' element={<DetailedPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}
