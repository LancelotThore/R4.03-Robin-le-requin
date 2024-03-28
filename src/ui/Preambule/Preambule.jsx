
import React from 'react';
import { Link } from 'react-router-dom';
import { Type, Type2 } from "../../components/Button/Type"
import { Requin3ans, Dent, Candy, Couverts, Calendar, Chrono, Sante, DentsRemplie, Soda, Bonbon, PateTartine, Gateau, Cereale, Chips, Biscuit,Compte, Requin6ans, Requin9ans } from "../../components/Button/Icons";
import {Perso, Perso2} from "../../components/Button/Perso";
import Robin from '../../components/Button/Robin';


export default function Preambule() {
    return (
        <>
            <div className="bg-background pb-5 flex items-center justify-center flex-col gap-5">
                <Compte className="absolute right-0 top-0 m-5 w-16" />
                <Robin/>
                <Perso/>
            </div>
            <div className="flex items-center flex-col mt-5 mb-5 gap-5">
                <Type2 text="Mon calendrier de suivi" Icon={Calendar}/>
                <Type2 text="Mon Chronomètre" Icon={Chrono}/>
                <Type2 text="Prendre soin de mes dents" Icon={Sante}/>
                <Type2 text="Le quizz des dents" Icon={DentsRemplie}/>
            </div>
        </>
    )
}