import { Dent } from "../../components/Button/Icons";

export default function Type() {
    return (
        <>
        <div className="rounded-lg bg-forground flex items-center justify-center">
            <div className="flex rounded-full items-center justify-center w-14 bg-background">
            <Dent></Dent>
            </div>
            <h2 className="text-text">Les caries</h2>
        </div>
        </>
    )
}