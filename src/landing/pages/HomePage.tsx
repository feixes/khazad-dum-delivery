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
        </>
    )
}



