import { workInProgress } from "../../assets/images"

export const WorkInProgress = () => {
    return (
        <section className="min-w-full">
            <img className="h-[50vh] m-auto" src={workInProgress} alt="work in progress" />
        </section>
    )
}
