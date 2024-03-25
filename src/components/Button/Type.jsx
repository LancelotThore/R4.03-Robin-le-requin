import { Dent } from "../../components/Button/Icons";

function Type({ text, Icon }) {
    return (
        <div className="rounded-lg bg-forground w-32 h-32 flex flex-col items-center justify-center drop-shadow-md gap-3">
            <div className="flex rounded-full items-center justify-center w-14 h-14 bg-background">
            <Icon/>
            </div>
            <h2 className="text-text">{text}</h2>
        </div>
    )
}

function Type2({ text, Icon }) {
    return (
        <div className="pl-3 rounded-3xl bg-forground w-72 h-16 flex flex-row items-center drop-shadow-md gap-3">
            <div className="flex rounded-full items-center justify-center w-10 h-10 bg-background">
            <Icon/>
            </div>
            <h2 className="text-text">{text}</h2>
        </div>
    )
}

export {Type, Type2}