import { Link } from "react-router-dom";
import { Compte, Retour } from "../../components/Icons";
import Robin from "../../components/Robin";
import { Perso } from "../../components/Perso";

export default function Resultat() {
    const score = Number(sessionStorage.getItem('score')) || 0;

    return (
        <div className="bg-background pb-5 flex items-center justify-center flex-col gap-8 h-screen">
            <Link to="/~thore2/robin-le-requin/preambule"><Retour className="absolute left-0 top-0 mt-7 ml-7" /></Link>
            <Link to="/~thore2/robin-le-requin/accueil"><Compte className="absolute right-0 top-0 m-5 w-16" /></Link>
            <Robin />
            <Perso />
            <h2 className="text-texttitle text-3xl font-bold ">Votre score est de :</h2>
            <h2 className="text-texttitle text-2xl font-semibold text-center px-8">{score}/2</h2>
        </div>
    )
}