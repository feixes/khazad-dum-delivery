import { Link } from "react-router-dom"


export const SolutionsHero = ({ title, text, image, index }) => {
    return (
        <div className="flex flex-col mb-10 gap-16 max-[1070px]:gap-10 max-container max-[1070px]:flex-col">


            <div
                key={text}
                className='flex gap-20 justify-between mb-15 items-center rounded-xl shadow-3xl max-xl:flex-col'
            >
                <img
                    src={image}
                    alt={image}
                    // height={300}
                    // width={300}
                    className={`object-cover h-[450px] w-[500px] ${index % 2 === 0 ? 'order-last rounded-r-xl' : 'rounded-l-xl'} flex-1 max-xl:order-last max-xl:w-full max-xl:rounded-b-xl max-xl:rounded-t-none `}
                />


                <div className="flex-1 p-8">
                    <h3 className="font-palanquin font-bold text-3xl leading-tight tracking-tighter mb-1">{title}</h3>
                    <hr className="bg-primary border-primary h-1 mb-8 mt-[-1px]" />
                    <p className='font-montserrat text-black-pale text-xl'>{text}</p>
                    <Link to='details'>
                        <p className="group text-black-pale bg-primary text-stroke hover:text-black font-bold font-palaquin mt-10 flex items-center transition duration-500 w-[15rem] rounded-full px-2 py-4 justify-center hover:bg-primary-dark text-xl">
                            Saber más

                            <svg xmlns="http://www.w3.org/2000/svg" fill='#9af5e4' viewBox="0 0 24 24" strokeWidth="3" stroke='currentColor' className="ml-2 fill-primary rounded-full w-5 h-5 group-hover:translate-x-5 transition duration-500 text-black-pale group-hover:text-black bg-primary group-hover:bg-primary-dark">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </p>
                    </Link>
                </div>


            </div>


        </div >
    )
}