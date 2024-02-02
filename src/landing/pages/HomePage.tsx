import { Hero } from "../../ui/components"

import { mapa } from "../../assets/images"
import { shield } from "../../assets/icons"




export const HomePage = () => {
    return (
        <>
            <section className="mt-10 min-h-[90vh]">

                <Hero imgURL={mapa} />
            </section>

            <section className=" padding bg-primary w-full">
                <div className="max-container bg-inherit padding-x">
                    <div className="border-2 rounded-xl max-w-[300px] h-[500px] bg-pale-blue shadow-3xl flex flex-col justify-center items-around p-8">
                        <img
                            src={shield}
                            alt={shield}
                            height={50}
                            width={50}
                            className="bg-primary rounded-full p-2 mx-auto mb-10 border-primary-dark border-2" />

                        <h4 className="text-2xl bg-transparent font-palanquin font-bold tracking-tighter">Seguridad</h4>
                        <hr className="h-1 bg-primary" />
                        <ul className="bg-transparent mt-10 text-montserrat">
                            <li className="bg-transparent">Los mejores guerreros de la tierra media</li>
                            <li className="bg-transparent">Enanos con escudo</li>
                            <li className="bg-transparent">Elfos con arcos</li>
                            <li className="bg-transparent">Montarathes con Espadas</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}



