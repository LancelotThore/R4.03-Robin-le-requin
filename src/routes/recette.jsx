import React from 'react';
import { Link } from 'react-router-dom';
import { Requin3ans, Dent, Candy, Couverts, Calendar, Chrono, Sante, DentsRemplie, Soda, Bonbon, PateTartine, Gateau, Cereale, Chips, Biscuit, Compte, Requin6ans, Requin9ans, Retour } from "../components/Icons";
import { Perso, Perso2 } from "../components/Perso";
import Robin from '../components/Robin';


export default function Recette() {
    return (
        <>
            <div className="bg-background pb-5 flex items-center justify-center flex-col gap-8">
                <Link to="/info"><Retour className="absolute left-0 top-0 mt-7 ml-7" /></Link>
                <Robin />
                <div className="flex flex-col items-center sm:flex-row gap-5">
                    <Perso2 />
                    <h2 className="text-texttitle text-3xl font-bold">La recette du jour</h2>
                </div>
                <div className="flex bg-forground flex-col mt-5 mb-5 drop-shadow-md w-2/3 max-w-98 p-5 rounded-md gap-5 items-baseline gap-8">
                    <h2 className="font-bold text-2xl text-center">L'omelette tendresse</h2>
                    <div className='flex flex-col gap-3'>
                        <h2 className="font-bold text-lg">Les ingrédients</h2>
                        <p>- 3 œufs</p>
                        <p>- 33,5g de lardons fumés</p>
                        <p>- 1 petit oignon</p>
                        <p>- 1/3 poivron vert</p>
                        <p>- 1 champignon de Paris</p>
                        <p>- Gruyère rapé</p>
                        <p>- Tomates cerises</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className="font-bold text-lg">La recette</h2>
                        <p>- Peler et découper l'oignon en petits bouts</p>
                        <p>- Découper le poivron en lamelles</p>
                        <p>- Faire dorer le tout à la poêle</p>
                        <p>- Rajouter les lardons un peu plus tard, puis les champignons finement coupés, à feu vif</p>
                        <p>- Lorsque la poêlée est grillée, battre les oeufs, et les ajouter dans la poêle, en baissant le feu</p>
                        <p>- Une fois l'omelette bien prise, saupoudrer généreusement de gruyère râpé</p>
                        <p>- Couper en deux les tomates cerises, et les rajouter en formant un motif... selon votre cœur</p>
                    </div>
                </div>
            </div>
        </>
    )
}