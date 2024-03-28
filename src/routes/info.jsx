import React from 'react';
import { Link } from 'react-router-dom';
import { Requin3ans, Dent, Candy, Couverts, Calendar, Chrono, Sante, DentsRemplie, Soda, Bonbon, PateTartine, Gateau, Cereale, Chips, Biscuit, Compte, Requin6ans, Requin9ans, Retour } from "../components/Icons";
import { Perso, Perso2 } from "../components/Perso";
import { Type } from '../components/Type';
import Robin from '../components/Robin';


export default function Info() {
    return (
        <>
            <div className="bg-background pb-5 flex items-center justify-center flex-col gap-5">
            <Retour className="absolute left-0 top-0 mt-7 ml-7" />
                <Robin/>
                <Perso2/>
            </div>
            <div className="flex items-center flex-col mt-5 mb-5 gap-5">
                <Type text="Les caries" Icon={Dent}/>
                <Type text="Les aliments à éviter" Icon={Candy}/>
                <Type text="Les dents de lait" Icon={Dent}/>
                <Type text="La recette du jour" Icon={Couverts}/>
            </div> 
        </>
    )
}