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

                <button className="group flex justify-center btn-primary w-full py-4 text-2xl mt-20 text-black-pale transition duration-500">
                    Acceder

                    <svg xmlns="http://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24" stroke-width="3" stroke='currentColor' className="ml-2 rounded-full w-5 h-5 bg-primary group-hover:bg-primary-dark group-hover:translate-x-5 transition duration-500 text-black-pale group-hover:text-black">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
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
