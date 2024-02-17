import { Link } from "react-router-dom"
import { key, mail, user } from "../../assets/icons"
import { login } from "../../assets/images"
import { LoginInput } from "../components/LoginInput"



export const LoginPage = () => {
    return (
        <main className="w-full max-h-[95vh] padding flex">
            <section className="flex max-container gap-10 text-2xl text-black-pale shadow-3xl">
                <div className="flex flex-col flex-1 m-10">
                    <div>
                        <h1 className="text-4xl font-palaquin font-semibold tracking-tighter">Bienvenido!</h1>
                        <hr className="bg-primary border-primary h-1 mb-10 max-container" />
                    </div>
                    <form className="flex flex-col gap-10 justify-center">

                        <LoginInput id="name" type="text" label="Nombre y Apellidos" icon={user} />

                        <LoginInput id="email" type="email" label="E-Mail" icon={mail} />

                        <LoginInput id="password" type="password" label="Contraseña" icon={key} />

                        <button className="btn-primary py-4 mt-20">Login</button>
                        <button className="btn-primary py-4 mt-1 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-4 text-black-pale bg-primary">
                                <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
                            </svg>
                            Login con Google
                        </button>

                    </form>
                    <div className="flex justify-between">
                        <Link to='workinprogress'>
                            <p className="mt-8 text-lg underline">He olvidado mi contraseña</p>
                        </Link>
                        <Link to='/auth/register'>
                            <p className="mt-8 text-lg underline">Crear usuario</p>
                        </Link>
                    </div>
                </div>

                <img className="flex-1 w-[50%]" src={login} alt="" />
            </section>
        </main >
    )
}

