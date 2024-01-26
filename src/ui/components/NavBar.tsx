

export const NavBar = () => {
    return (
        <header className="p-4 border-4 flex text-slate-gray w-full">


            <nav className="max-container flex flex-1 justify-between items-center">
                <h4 className="text-5xl font-bold font-palanquin text-[#505050] hover:text-black cursor-pointer">Anddara</h4>
                <ul className="flex font-medium text-xl gap-10 font-montserrat max-lg:gap-4 max-lg:text-lg max-md:hidden">
                    <li className="hover:text-black cursor-pointer">Home</li>
                    <li className="hover:text-black cursor-pointer">¿Que hacemos?</li>
                    <li className="hover:text-black cursor-pointer">Sobre Nosotros</li>
                    <li className="hover:text-black cursor-pointer">Contáctanos</li>
                </ul>
                <p className="bg-primary text-[#505050] px-8 py-2 items-center font-montserrat font-bold rounded-full cursor-pointer">Acceder</p>
            </nav>
        </header>
    )
}