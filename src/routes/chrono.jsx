import React from 'react';
import { Link } from 'react-router-dom';
import { Requin3ans, Dent, Candy, Couverts, Calendar, Chrono, Sante, DentsRemplie, Soda, Bonbon, PateTartine, Gateau, Cereale, Chips, Biscuit, Compte, Requin6ans, Requin9ans, Retour } from "../components/Icons";
import Robin from '../components/Robin';
import Timer from '../components/Timer';

export default function ChronoPage() {
    return (
        <div className=" pb-5 flex bg-background h-screen items-center justify-between flex-col gap-8">
            <Link to="/~thore2/robin-le-requin/preambule"><Retour className="absolute left-0 top-0 mt-7 ml-7" /></Link>
            <Robin />
            <Timer />
            <div></div>
        </div>
    )
}