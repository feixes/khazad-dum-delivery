import { Hero } from "../../ui/components"

import { mapa } from "../../assets/images"



export const HomePage = () => {
    return (
        <>
            <section className="mt-10 min-h-[90vh]">

                <Hero imgURL={mapa} />
            </section>

            <section className="border-2 padding bg-primary w-full">
                <div className="max-container bg-inherit padding-x">
                    <div className="border-2 rounded-xl max-w-[300px] h-[500px] bg-pale-blue shadow-3xl flex-col justify-center items-center">
                        <h4 className="text-2xl bg-inherit font-palanquin font-bold tracking-tighter">Seguridad</h4>
                        <ul className="bg-inherit">
                            <li>Los mejores guerreros de la tierra media</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}



