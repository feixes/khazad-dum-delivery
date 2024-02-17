import { key, mail, user } from "../../assets/icons"
import { login } from "../../assets/images"
import { LoginInput } from "../components/LoginInput"



export const RegisterPage = () => {
    return (
        <main className="w-full max-h-[95vh] padding flex">
            <section className="flex max-container gap-10 text-2xl text-black-pale shadow-3xl">
                <div className="flex flex-col flex-1 m-10">
                    <div>
                        <h1 className="text-4xl font-palaquin font-semibold tracking-tighter">Regístrate!</h1>
                        <hr className="bg-primary border-primary h-1 mb-10 max-container" />
                    </div>
                    <form className="flex flex-col gap-10 justify-center">

                        <LoginInput id="name" type="text" label="Nombre y Apellidos" icon={user} />

                        <LoginInput id="email" type="email" label="E-Mail" icon={mail} />

                        <LoginInput id="password" type="password" label="Contraseña" icon={key} />
                        <LoginInput id="password-repeat" type="password" label="Repite la Contraseña" icon={key} />

                        <button className="btn-primary py-4 mt-20">Login</button>

                    </form>
                </div>

                <img className="flex-1 w-[50%]" src={login} alt="" />
            </section>
        </main >
    )
}
