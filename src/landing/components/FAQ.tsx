import { useRef } from "react"
import { useOpenModal } from "../../hooks/useOpenModal"


export const FAQ = () => {

    const faq = useRef(null)

    const { isOpen, handleOpen } = useOpenModal(faq)

    return (
        <div className="max-container">
            <hr />
            <div
                ref={faq}
                className="flex justify-between p-10 items-center cursor-pointer"
                onClick={handleOpen}
            >
                <p className="text-3xl font-palaquin tracking tighter">¿Cuanto tarda mi anillo a llegar a Mordor?</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    className={`w-6 h-6 ${isOpen && 'rotate-90'} transition duration-500`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <hr />
            <div className={`${isOpen ? 'block' : 'hidden'} p-20`}>

                <p className="text-2xl font-montserrat text-black-pale">Entre 30 y 40 días según el método de transporte</p>
            </div>


        </div>
    )
}
