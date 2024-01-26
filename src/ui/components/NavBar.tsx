import { useEffect, useRef, useState } from 'react'
import { hamburgerMenu } from '../../assets/icons'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {

    const hamMenu = useRef(null)

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(prevState => !prevState)
    }

    useEffect(() => {

        const closeMenu = (event) => {
            if (!hamMenu.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.body.addEventListener('click', closeMenu)

        return () => document.body.removeEventListener('click', closeMenu)
    }, [])




    return (
        <header className="text-slate-gray w-full">
            <nav className="p-4 max-container flex flex-1 justify-between items-center">
                <h4 className="text-5xl max-md:text-4xl font-bold font-palanquin text-[#505050] hover:text-black cursor-pointer">Anddara</h4>
                <ul className="flex font-medium text-xl gap-10 font-montserrat max-lg:gap-4 max-lg:text-base max-md:hidden px-6">
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
                    <p className="bg-primary text-[#505050] px-8 py-2 items-center font-montserrat font-bold rounded-full cursor-pointer max-md:hidden">Acceder</p>
                </Link>
                <img
                    src={hamburgerMenu}
                    height={40}
                    width={40}
                    alt="hamburger menu"
                    className='cursor-pointer max-md:block hidden'
                    ref={hamMenu}
                    onClick={handleOpen}
                />
            </nav>


            {
                isOpen && (
                    <ul className="absolute w-full righ-[0%] border-2  flex-col pt-20 z-10 text-center font-medium text-2xl gap-10 font-montserrat px-6 border-b-2 pb-10 hidden max-md:flex">
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
                            <li className="bg-primary text-[#505050] px-8 py-2 items-center font-montserrat font-bold rounded-full cursor-pointer">Acceder</li>
                        </Link>
                    </ul>
                )
            }

        </header>
    )
}