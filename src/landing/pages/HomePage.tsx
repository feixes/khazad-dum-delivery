import { BenefitsCard, SolutionsHero } from "../components"
import { Hero } from "../components/Hero"
import { benefitsConstants } from "../constants/BenefitsConstants"
import { solutionsConstants } from "../constants/SolutionsConstants"





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

            </section>
        </>
    )
}



