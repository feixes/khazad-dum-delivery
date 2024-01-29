

export const Hero = ({ children, imgURL }) => {
    return (
        <div className="flex gap-16 max-[1070px]:gap-10 max-container padding max-[1070px]:flex-col">
            {children}

            <img
                src={imgURL}
                alt={imgURL}
                width={610}
                height={100}
                className="justify-center align-center"
            />
        </div>
    )
}
