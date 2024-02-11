import { AppRouter } from "./router/AppRouter"
import { NavBar, Footer } from "./ui/components"

export const App = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
      <Footer />
    </>
  )
}
