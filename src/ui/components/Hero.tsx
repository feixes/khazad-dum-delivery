

export const Hero = ({ children, imgURL }) => {
    return (
        <div className="flex gap-16 max-container padding ">
            {children}

            <img
                src={imgURL}
                alt={imgURL}
                width={610}
                height={100}
                className="border-2"
            />
        </div>
    )
}
