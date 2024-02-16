import { Link } from "react-router-dom"
import { logo } from "../../assets/images"
import { copyright, facebook, instagram, twitter, youtube } from "../../assets/icons"


export const Footer = () => {
    return (
        <footer className="w-full bg-primary text-black-pale padding">


            <div className="flex justify-around bg-primary">
                <ul className="text-xl font-bold font-montserrat gap-10 bg-primary">
                    <Link to='/'>
                        <li className="bg-primary m-8">
                            Home
                        </li>
                    </Link>
                    <Link to='/details'>
                        <li className="bg-primary m-8">
                            ¿Que Hacemos?
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li className="bg-primary m-8">
                            Sobre nosotros
                        </li>
                    </Link>
                    <Link to='/contact'>
                        <li className="bg-primary m-8">
                            Contactanos
                        </li>
                    </Link>
                    <Link to='/login'>
                        <li className="bg-primary m-8 mb-20">
                            Accede
                        </li>
                    </Link>

                </ul>

                <div className="bg-primary">
                    <img src={logo} alt="" className="bg-primary p-20" />
                    <div className="bg-primary flex justify-center gap-10">
                        <a href="">
                            <img src={facebook} alt="facebook" className="w-10 h-10 bg-primary " />
                        </a>
                        <a href="">
                            <img src={twitter} alt="twitter" className="w-10 h-10 bg-primary " />
                        </a>
                        <a href="">
                            <img src={instagram} alt="instagram" className="w-10 h-10 bg-primary " />
                        </a>
                        <a href="">
                            <img src={youtube} alt="youtube" className="w-10 h-10 bg-primary" />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="bg-black-pale border-primary h-1 max-container" />
            <div className="max-container bg-primary">

                <ul className="flex text-lg justify-between font-montserrat gap-10 bg-primary mt-4 mb-10">
                    <Link to='/'>
                        <li className="bg-primary">
                            Cosas de privacidad
                        </li>
                    </Link>
                    <Link to='/'>
                        <li className="bg-primary">
                            Cosas legales
                        </li>
                    </Link>
                    <Link to='/'>
                        <li className="bg-primary">
                            Más cosas legales
                        </li>
                    </Link>
                    <Link to='/'>
                        <li className="bg-primary">
                            Política de cookies
                        </li>
                    </Link>
                    <Link to='/'>
                        <li className="bg-primary">
                            Realmente no se que poner
                        </li>
                    </Link>

                </ul>

                <div className="flex justify-start items-center bg-primary ">
                    <img src={copyright} alt="copyright" className="bg-primary h-4 w-4 mr-1" />
                    <p className="bg-primary">Copyright 2024 Anddara</p>
                </div>
                <p className="bg-primary">All rights reserved</p>

            </div>

        </footer>
    )
}
