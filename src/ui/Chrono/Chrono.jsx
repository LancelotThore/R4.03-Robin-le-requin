import React from 'react';
import { Link } from 'react-router-dom';
import { Requin3ans, Dent, Candy, Couverts, Calendar, Chrono, Sante, DentsRemplie, Soda, Bonbon, PateTartine, Gateau, Cereale, Chips, Biscuit, Compte, Requin6ans, Requin9ans, Retour } from "../../components/Button/Icons";
import Robin from '../../components/Button/Robin';
import Timer from '../../components/Button/timer';

export default function ChronoPage() {
    return (
        <div className=" pb-5 flex bg-background h-screen items-center justify-between flex-col gap-8">
        <Retour className="absolute left-0 top-0 mt-7 ml-7" />
        <Robin />
        <Timer/>
        <div></div>
        </div>
    )
}