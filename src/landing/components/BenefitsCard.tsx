import { check } from "../../assets/icons"




export const BenefitsCard = ({ title, icon, benefits }) => {
    return (

        <div className=" rounded-xl w-[300px] h-[500px] bg-pale-blue shadow-3xl flex flex-col justify-center items-around p-8">

            <img
                src={icon}
                alt={icon}
                height={50}
                width={50}
                className="bg-primary rounded-full p-2 mx-auto mb-10 border-primary-dark border-2" />

            <h4 className="text-2xl bg-transparent font-palanquin font-bold tracking-tighter">{title}</h4>
            <hr className="h-1 bg-primary border-primary" />
            <ul className="bg-transparent mt-10 text-montserrat">
                {
                    benefits.map(benefit => (
                        <li key={benefit} className="mt-5 bg-transparent flex">
                            <img
                                src={check}
                                alt="checkbox item"
                                className="bg-primary p-0.5 border-[1px] border-primary-dark rounded-full border-1  mr-2"
                                height={25}
                                width={25}
                            />
                            {benefit}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
