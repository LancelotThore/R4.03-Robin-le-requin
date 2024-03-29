import React from 'react';
import { Link } from 'react-router-dom';
import { Requin3ans, Dent, Candy, Couverts, Calendar, Chrono, Sante, DentsRemplie, Soda, Bonbon, PateTartine, Gateau, Cereale, Chips, Biscuit, Compte, Requin6ans, Requin9ans, Retour } from "../components/Icons";
import { Perso, Perso2 } from "../components/Perso";
import { Type2 } from '../components/Type';
import Robin from '../components/Robin';


export default function Aliments() {
    return (
        <>
            <div className="bg-background pb-5 flex items-center justify-center flex-col gap-8">
                <Link to="/~thore2/robin-le-requin/info"><Retour className="absolute left-0 top-0 mt-7 ml-7" /></Link>
                <Robin />
                <div className="flex flex-col items-center sm:flex-row gap-5">
                    <Perso2 />
                    <h2 className="text-texttitle text-3xl font-bold">Les aliments à éviter</h2>
                </div>
                <div className="flex bg-forground flex-col mt-5 mb-5 items-center drop-shadow-md w-2/3 max-w-98 p-5 rounded-md gap-5">
                    <a>Pour réduire le risque de développer des caries dentaires, il est recommandé d'éviter ou de limiter la consommation des aliments et des boissons suivants :</a>
                    <div className="mt-5 flex gap-5 flex-col">
                        <Type2 text="Sodas" Icon={Soda} />
                        <Type2 text="Soda light" Icon={Soda} />
                        <Type2 text="Confiserie" Icon={Bonbon} />
                        <Type2 text="Pâte à tartiner" Icon={PateTartine} />
                        <Type2 text="Gâteaux" Icon={Gateau} />
                        <Type2 text="Jus de fruit" Icon={Soda} />
                        <Type2 text="Céréales" Icon={Cereale} />
                        <Type2 text="Chips" Icon={Chips} />
                        <Type2 text="Biscuit apéritifs" Icon={Biscuit} />
                    </div>
                </div>
            </div>
        </>
    )
}