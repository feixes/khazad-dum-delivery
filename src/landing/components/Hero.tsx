import { rightArrow } from "../../assets/icons"
import { mapa } from "../../assets/images"


export const Hero = () => {
    return (
        <div className="flex gap-16 max-[1070px]:gap-10 max-container padding max-[1070px]:flex-col">

            <div className="">
                <h1
                    className="text-8xl font-bold font-palanquin leading-[.95] tracking-tight max-xl:text-[72px] max-[1145px]:text-6xl max-[1070px]:text-3xl">
                    De la comarca a <span className="text-primary">Mordor</span> en 30 días
                </h1>

                <p className="text-black-pale mt-6 text-2xl leading-10">Transportamos cualquier tipo de joyería para su posterior destrucción en la fragua que lo forjó</p>
                <button className="group flex justify-center btn-primary w-full py-4 text-2xl mt-20">
                    Acceder
                    <img src={rightArrow} alt={rightArrow} className="ml-2 rounded-full w-5 h-5 bg-primary group-hover:bg-primary-dark group-hover:translate-x-5 transition duration-500" />
                </button>
            </div>

            <img
                src={mapa}
                alt={mapa}
                width={610}
                height={100}
                className="justify-center align-center"
            />
        </div>
    )
}