import React from 'react';
import { Link } from 'react-router-dom';
import { Requin3ans, Dent, Candy, Couverts, Calendar, Chrono, Sante, DentsRemplie, Soda, Bonbon, PateTartine, Gateau, Cereale, Chips, Biscuit, Compte, Requin6ans, Requin9ans, Retour } from "../../components/Button/Icons";
import { Perso, Perso2 } from "../../components/Button/Perso";
import { TypeDents } from '../../components/Button/Type';
import { Input } from '../../components/Button/input';
import Robin from '../../components/Button/Robin';
import { BtnPlay, BtnStop } from '../../components/Button/Music';


export default function Dents() {
    return (
        <div className="bg-background pb-5 flex items-center justify-center flex-col gap-8">
            <Retour className="absolute left-0 top-0 mt-7 ml-7" />
            <Robin />
            <div className="flex items-center gap-5">
                <Perso />
                <h2 className="text-texttitle text-3xl font-bold ">Les dents de lait</h2>
            </div>
            <div className="flex bg-forground flex-col mt-5 mb-5 drop-shadow-md w-2/3 max-w-98 p-5 rounded-md gap-5">
                <h2 className="font-bold text-3xl">Pourquoi on perd ses dents de lait ?</h2>
                <a>La perte des dents de lait commence généralement vers l'âge de 6 ans et se poursuit jusqu'à l'âge d'environ 12 ans, lorsque toutes les dents permanentes ont normalement éclaté. Il est important d'encourager une bonne hygiène bucco-dentaire dès le plus jeune âge pour maintenir la santé des dents de lait et faciliter le développement des dents permanentes.</a>
                <div className="mt-5 flex gap-5 flex-col items-center">

                    <TypeDents Icon={Dent} />
                    <h2 className="font-semibold">Etape 1</h2>
                    <h2>Dents de lait</h2>
                    <TypeDents />
                    <h2 className="font-semibold">Etape 2</h2>
                    <h2 >Perte de ses dents de lait</h2>
                    <TypeDents Icon={Dent} />
                    <h2 className="font-semibold">Etape 3</h2>
                    <h2>Pousse des dents définitives</h2>
                </div>
            </div>
        </div>
    )
}