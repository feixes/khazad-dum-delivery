import { useRef } from 'react'
import { cross, hamburgerMenu } from '../../assets/icons'
import { Link, NavLink } from 'react-router-dom'
import { logo } from '../../assets/images'
import { useOpenModal } from '../../hooks/useOpenModal'

export const NavBar = () => {

    /*TODO:
        - Usar Typescript de verdad
        - Animar Iconos Burguer/Cross
        - Animar la aparición del Menú
        - Animación para click de botones
        - Animación para click de menú en responsive
        - Highlight de la pagina en la que nos encontramos <NavLink>
    */

    const hamMenu = useRef(null)

    const { isOpen, handleOpen } = useOpenModal(hamMenu)

    return (
        <header className="text-black-pale w-full max-h-[10vh] text-2xl ">
            <nav className="max-container flex flex-1 justify-around items-center p-10 mx-auto">
                <Link to='/'>
                    <img
                        src={logo}
                        className=" max-md:h-[35px] max-md:w-[150px] w-[200px] h-[40px] text-black-pale hover:text-black cursor-pointer"
                    />
                </Link>
                <ul className="flex font-medium text-2xl gap-10 font-montserrat max-lg:gap-4 max-lg:text-base max-md:hidden px-6">
                    <NavLink to='/'>
                        <li className="hover:text-black cursor-pointer">Home</li>
                    </NavLink>
                    <NavLink to='details'>
                        <li className="hover:text-black cursor-pointer">¿Que hacemos?</li>
                    </NavLink>
                    <NavLink to='about'>
                        <li className="hover:text-black cursor-pointer">Sobre Nosotros</li>
                    </NavLink>
                    <NavLink to='contact'>
                        <li className="hover:text-black cursor-pointer">Contáctanos</li>
                    </NavLink>
                </ul>
                <Link to='auth/login'>
                    <p className="btn-primary px-8 py-2 max-md:hidden">Acceder</p>
                </Link>
                <img
                    src={isOpen ? cross : hamburgerMenu}
                    height={35}
                    width={35}
                    alt="hamburger menu"
                    className='cursor-pointer max-md:block hidden'
                    ref={hamMenu}
                    onClick={handleOpen}
                />
            </nav>

            {
                isOpen && (
                    <ul className="absolute w-full righ-[0%] flex-col pt-10 z-10 text-center font-medium text-2xl gap-10 font-montserrat px-6 border-b-2 pb-10 hidden max-md:flex">

                        <Link to='/'>
                            <li className="hover:text-black cursor-pointer">Home</li>
                        </Link>
                        <Link to='details'>
                            <li className="hover:text-black cursor-pointer">¿Que hacemos?</li>
                        </Link>
                        <Link to='about'>
                            <li className="hover:text-black cursor-pointer">Sobre Nosotros</li>
                        </Link>
                        <Link to='contact'>
                            <li className="hover:text-black cursor-pointer">Contáctanos</li>
                        </Link>
                        <Link to='auth/login'>
                            <li className="bg-primary text-[#505050] px-8 py-2 items-center font-montserrat font-bold rounded-full cursor-pointer hover:bg-primary-dark transition duration-500">Acceder</li>
                        </Link>
                    </ul>
                )
            }

        </header>
    )
}