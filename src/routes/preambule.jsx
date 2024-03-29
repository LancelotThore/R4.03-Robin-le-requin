import React from 'react';
import { Link } from 'react-router-dom';
import { Type, Type2 } from "../components/Type"
import { Requin3ans, Dent, Candy, Couverts, Calendar, Chrono, Sante, DentsRemplie, Soda, Bonbon, PateTartine, Gateau, Cereale, Chips, Biscuit, Compte, Requin6ans, Requin9ans, Retour } from "../components/Icons";
import { Perso, Perso2 } from "../components/Perso";
import Robin from '../components/Robin';


export default function Preambule() {
    return (
        <>
            <div className="h-screen flex flex-col">
                <div className="bg-background pb-5 flex items-center justify-center flex-col gap-5">
                    <Link to="/~thore2/robin-le-requin/accueil"><Compte className="absolute right-0 top-0 m-5 w-16" /></Link>
                    <Robin />
                    <Perso />
                </div>
                <div className="flex items-center justify-evenly flex-col mt-5 mb-5 gap-5 h-full pb-8">
                    <Type2 text="Mon calendrier de suivi" extraClasses="w-72" Icon={Calendar} />
                    <Link to="/~thore2/robin-le-requin/chrono"><Type2 text="Mon Chronomètre" extraClasses="w-72" Icon={Chrono} /></Link>
                    <Link to="/~thore2/robin-le-requin/info"><Type2 text="Prendre soin de mes dents" extraClasses="w-72" Icon={Sante} /></Link>
                    <Link to="/~thore2/robin-le-requin/quizz"><Type2 text="Le quizz des dents" extraClasses="w-72" Icon={DentsRemplie} /></Link>
                </div>
            </div>
        </>
    )
}