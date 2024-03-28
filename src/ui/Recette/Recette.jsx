import React from 'react';
import { Link } from 'react-router-dom';
import { Requin3ans, Dent, Candy, Couverts, Calendar, Chrono, Sante, DentsRemplie, Soda, Bonbon, PateTartine, Gateau, Cereale, Chips, Biscuit, Compte, Requin6ans, Requin9ans, Retour } from "../../components/Button/Icons";
import { Perso, Perso2 } from "../../components/Button/Perso";


export default function Recette() {
    return (
        <>
            <div className="bg-background pb-5 flex items-center justify-center flex-col gap-8">
            <Link to=""> <Retour className="absolute left-0 top-0 m-5 w-16" /></Link>
                <h1 className="text-forground text-center pt-10 text-4xl">Robin Le <br></br> Requin</h1>
                <div className="flex items-center gap-5">
                    <Perso />
                    <h2 className="text-texttitle text-3xl font-bold">La recette du jour</h2>
                </div>
                <div className="flex bg-forground flex-col mt-5 mb-5 items-center drop-shadow-md w-2/3 max-w-98 p-5 rounded-md gap-5">
                    <h2 className="font-bold text-2xl">L'omelette tendresse</h2>
                    <div className="flex flex-col items-baseline gap-5">
                        <h2 className="font-bold text-lg">Les ingrédients</h2>
                        <a>- 2 œufs
                            - 33,5g de lardons fumés
                            - 1 petit oignon
                            - 1/3 poivron vert
                            - 1 champignon de Paris
                            - Gruyère rapé
                            - Tomates cerises</a>
                        <h2 className="font-bold text-lg">La recette</h2>
                        <a>- Peler et découper l'oignon en petits bouts

                            - Découper le poivron en lamelles

                            - Faire dorer le tout à la poêle

                            - Rajouter les lardons un peu plus tard, puis les champignons finement coupés, à feu vif

                            - Lorsque la poêlée est grillée, battre les oeufs, et les ajouter dans la poêle, en baissant le feu

                            - Une fois l'omelette bien prise, saupoudrer généreusement de gruyère râpé

                            - Couper en deux les tomates cerises, et les rajouter en formant un motif... selon votre cœur</a>
                    </div>
                </div>
            </div>
        </>
    )
}