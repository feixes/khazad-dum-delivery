import { Hero } from "../../ui/components"

import { rightArrow } from "../../assets/icons"
import { mapa } from "../../assets/images"



export const HomePage = () => {
    return (
        <>
            <Hero imgURL={mapa}>
                <div className="border-2">
                    <h1 className="text-8xl font-bold font-palanquin leading-[.95] tracking-tight">De la comarca a <span className="text-primary">Mordor</span> en 30 días</h1>
                    <p className="text-black-pale mt-6 text-xl leading-10">Transportamos cualquier tipo de joyería para su posterior destrucción en la fragua que lo forjó</p>
                    <button className="group flex justify-center btn-primary w-full py-4 text-xl mt-20">
                        Empezar
                        <img src={rightArrow} alt={rightArrow} className="ml-2 rounded-full w-5 h-5 bg-primary group-hover:bg-primary-dark group-hover:translate-x-5 transition duration-500" />
                    </button>
                </div>
            </Hero>
        </>
    )
}



