import { shield, check } from "../../assets/icons"
import { Hero } from "../components/Hero"




export const HomePage = () => {
    return (
        <>
            <section className="mt-10 min-h-[90vh]">

                <Hero />
            </section>

            <section className=" padding bg-primary w-full">
                <div className="max-container bg-inherit padding-x">
                    <div className=" rounded-xl max-w-[300px] h-[500px] bg-pale-blue shadow-3xl flex flex-col justify-center items-around p-8">
                        <img
                            src={shield}
                            alt={shield}
                            height={50}
                            width={50}
                            className="bg-primary rounded-full p-2 mx-auto mb-10 border-primary-dark border-2" />

                        <h4 className="text-2xl bg-transparent font-palanquin font-bold tracking-tighter">Seguridad</h4>
                        <hr className="h-1 bg-primary" />
                        <ul className="bg-transparent mt-10 text-montserrat">
                            <li className="mt-5 bg-transparent flex">
                                <img src={check} alt="" className="bg-primary p-0.5 border-[1px] border-primary-dark rounded-full border-1  mr-2" height={25} width={25} />
                                Magos blancos
                            </li>
                            <li className="mt-5 bg-transparent flex">
                                <img src={check} alt="" className="bg-primary p-0.5 border-[1px] border-primary-dark rounded-full border-1  mr-2" height={25} width={25} />
                                Enanos con hachas
                            </li>
                            <li className="mt-5 bg-transparent flex">
                                <img src={check} alt="" className="bg-primary p-0.5 border-[1px] border-primary-dark rounded-full border-1  mr-2" height={25} width={25} />
                                Elfos con arcos
                            </li>
                            <li className="mt-5 bg-transparent flex">
                                <img src={check} alt="" className="bg-primary p-0.5 border-[1px] border-primary-dark rounded-full border-1  mr-2" height={25} width={25} />
                                Montarathes con Espadas
                            </li>
                            <li className="mt-5 bg-transparent flex">
                                <img src={check} alt="" className="bg-primary p-0.5 border-[1px] border-primary-dark rounded-full border-1  mr-2" height={25} width={25} />
                                Humanos incorruptibles
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}



