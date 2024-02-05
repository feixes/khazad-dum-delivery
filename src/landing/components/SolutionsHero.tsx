import { solutionsConstants } from "../constants/SolutionsConstants"


export const SolutionsHero = () => {
    return (
        <div className="flex flex-col gap-16 max-[1070px]:gap-10 max-container max-[1070px]:flex-col">

            {
                solutionsConstants.map(({ title, text, image }, index) => (
                    <div
                        key={text}
                        className='flex gap-20 justify-between mb-15 items-center rounded-xl shadow-3xl'
                    >
                        <img
                            src={image}
                            alt={image}
                            // height={300}
                            // width={300}
                            className={`object-cover h-[450px] w-[500px] ${index % 2 === 0 ? 'order-last rounded-r-xl' : 'rounded-l-xl'} flex-1`}
                        />
                        <div className="flex-1 p-8">
                            <h3 className="font-palanquin font-bold text-3xl leading-tight tracking-tighter mb-8">{title}</h3>
                            <p className='font-montserrat text-black-pale text-lg'>{text}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}