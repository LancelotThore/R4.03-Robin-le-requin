import { Requin3ans, Requin6ans, Requin9ans } from "./Icons";

function Perso() {
    return (
        <div className="flex items-center justify-center bg-backgroundshark w-64 h-64 p-4 rounded-full">
            <div className="bg-texttitle w-56 h-56 rounded-full flex items-center justify-center">
                <Requin3ans className="max-w-52 max-h-40" />
            </div>
        </div>
    )
}

function Perso2() {
    return (
        <div className="flex items-center justify-center bg-backgroundshark w-34 h-34 p-4 rounded-full">
            <div className="bg-texttitle w-26 h-26 rounded-full flex items-center justify-center">
                <Requin3ans className="max-w-32 max-h-20" />
            </div>
        </div>
    )
}

export {Perso, Perso2}