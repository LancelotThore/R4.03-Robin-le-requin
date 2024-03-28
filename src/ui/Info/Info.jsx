
import React from 'react';
import { Link } from 'react-router-dom';
import { Type, Type2 } from "../../components/Button/Type"
import { Requin3ans, Dent, Candy, Couverts, Calendar, Chrono, Sante, DentsRemplie, Soda, Bonbon, PateTartine, Gateau, Cereale, Chips, Biscuit,Compte, Requin6ans, Requin9ans, Retour } from "../../components/Button/Icons";
import {Perso, Perso2} from "../../components/Button/Perso";


export default function Info() {
    return (
        <>
            <div className="bg-background pb-5 flex items-center justify-center flex-col gap-5">
            <Link to=""> <Retour className="absolute left-0 top-0 m-5 w-16" /></Link>
                <h1 className="text-forground text-center pt-10 text-4xl">Robin Le <br></br> Requin</h1>
                <Perso/>
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