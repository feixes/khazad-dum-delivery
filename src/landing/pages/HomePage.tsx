import { Button } from "../../ui/components/Button"
import { Input } from "../../ui/components/Input"
import { BenefitsCard, SolutionsHero, FAQ } from "../components"
import { Hero } from "../components/Hero"
import { faqConstants, benefitsConstants, solutionsConstants } from "../constants"



export const HomePage = () => {
    return (
        <>
            <section className="flex justify-center items-center min-h-[90vh]">
                <Hero />
            </section>

            <section className="padding bg-primary w-full">
                <div className="max-container bg-inherit padding-x grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 place-items-center gap-10">

                    {
                        benefitsConstants.map(benefitItem => (

                            <BenefitsCard key={benefitItem.title} {...benefitItem} />
                        ))
                    }

                </div>
            </section>

            <section className="padding w-full">

                {
                    solutionsConstants.map((solution, index) => (
                        <SolutionsHero key={solution.title} {...solution} index={index} />
                    ))
                }
            </section>

            <section className="padding w-full">

                <div className="flex max-container gap-5 items-center">

                    <h3 className="text-5xl font-palanquin tracking-tighter">Preguntas Frequentes</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[3rem] h-[3rem]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>

                </div>

                <hr className="bg-primary border-primary h-1 mb-20 max-container" />

                {
                    faqConstants.map(faq => (
                        <FAQ key={faq.question} {...faq} />
                    ))
                }
            </section>

            <section className="padding w-full">
                <div className="max-container">

                    <form className="flex m-auto max-lg:flex-col max-lg:gap-5 gap-5 max-w-[75%] ">


                        <div className="flex w-[75%] max-lg:w-full  items-center border border-black-pale rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-2">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                            <input type="mail"
                                placeholder="E-Mail"
                                className="ml-1 text-2xl mr-10 flex-3 py-4 px-4 outline-none flex-1 max-lg:w-full"
                            />
                        </div>



                        {/* TODO: Link a login */}

                        <button className="group max-lg:w-full w-[25%] text-black-pale bg-primary text-stroke hover:text-black font-bold font-palaquin flex items-center transition duration-500 rounded-full px-2 py-4 justify-center hover:bg-primary-dark text-xl">
                            Acceder

                            <svg xmlns="http://www.w3.org/2000/svg" fill='#9af5e4' viewBox="0 0 24 24" stroke-width="3" stroke='currentColor' className="ml-2 fill-primary rounded-full w-5 h-5 group-hover:translate-x-5 transition duration-500 text-black-pale group-hover:text-black bg-primary group-hover:bg-primary-dark">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>


                    </form>

                </div>

            </section>
        </>
    )
}



