

export const NavBar = () => {
    return (
        <header className="p-4 border-4 ">


            <nav className="flex border-2 max-w-full justify-between">
                <h4 className="text-3xl font-palanquin">Anddara</h4>
                <ul className="flex gap-10 font-montserrat">
                    <li>Home</li>
                    <li>Sobre Nosotros</li>
                    <li>¿Que hacemos?</li>
                    <li>Contáctanos</li>
                    <li>Acceder</li>
                </ul>
            </nav>
        </header>
    )
}