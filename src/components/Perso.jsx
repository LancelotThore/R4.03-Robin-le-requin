import { Requin3ans, Requin6ans, Requin9ans } from "./Icons";

export default function Perso() {
    return (
        <div className="flex items-center justify-center bg-blue-500 w-64 h-64 p-4 rounded-full">
            <div className="bg-green-400 w-56 h-56 rounded-full flex items-center justify-center">
                <Requin3ans className="max-w-52 max-h-40" />
            </div>
        </div>
    )
}