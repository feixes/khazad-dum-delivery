import { FeaturesCard } from "../components"
import { Hero } from "../components/Hero"
import { featuresConstants } from "../constants/FeaturesConstants"




export const HomePage = () => {
    return (
        <>
            <section className="mt-10 min-h-[90vh]">

                <Hero />
            </section>

            <section className=" padding bg-primary w-full">
                <div className="max-container bg-inherit padding-x flex justify-around">

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



