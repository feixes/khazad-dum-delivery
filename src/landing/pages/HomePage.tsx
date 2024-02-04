import { FeaturesCard } from "../components"
import { Hero } from "../components/Hero"
import { featuresConstants } from "../constants/FeaturesConstants"




export const HomePage = () => {
    return (
        <>
            <section className="flex justify-center items-center min-h-[90vh]">
                <Hero />
            </section>

            <section className="padding bg-primary w-full">
                <div className="max-container bg-inherit padding-x grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 place-items-center gap-10">

                    {
                        featuresConstants.map(featureItem => (

                            <FeaturesCard key={featureItem.title} {...featureItem} />
                        ))
                    }

                </div>
            </section>
        </>
    )
}



