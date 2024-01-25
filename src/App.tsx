import { AppRouter } from "./router/AppRouter"
import { NavBar } from "./ui/components"

export const App = () => {
  return (
    <>
      <NavBar />
      <div className='text-10xl text-red-600'>Hola Mundo</div>
      <AppRouter />
    </>
  )
}
