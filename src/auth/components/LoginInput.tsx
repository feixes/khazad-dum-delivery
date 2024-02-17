

interface Props {
    id: string,
    type: string,
    label: string,
    icon: JSX.Element
}


export const LoginInput = ({ id, type, label, icon }: Props) => {
    return (
        <div className="">
            <label
                htmlFor={id}
                className="mb-2 ml-4"
            >
                {label}
            </label>

            <div className="flex items-center border border-black-pale rounded-2xl mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-4">
                    {icon}
                </svg>

                <input type={type} id={id} className="py-2 outline-none ml-4 w-[85%]" />
            </div>

        </div>
    )
}
