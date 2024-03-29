import React from 'react';
import { Link } from 'react-router-dom';
import { Requin3ans, Dent, Candy, Couverts, Calendar, Chrono, Sante, DentsRemplie, Soda, Bonbon, PateTartine, Gateau, Cereale, Chips, Biscuit, Compte, Requin6ans, Requin9ans, Retour } from "../components/Icons";
import { Perso, Perso2 } from "../components/Perso";
import Robin from '../components/Robin';


export default function Caries() {
    return (
        <>
            <div className="bg-background pb-5 flex items-center justify-center flex-col gap-8">
                <Link to="/~thore2/robin-le-requin/info"><Retour className="absolute left-0 top-0 mt-7 ml-7" /></Link>
                <Robin />
                <div className="flex flex-col items-center sm:flex-row gap-5">
                    <Perso2 />
                    <h2 className="text-texttitle text-3xl font-bold">Les caries</h2>
                </div>
                <div className="flex bg-forground flex-col mt-5 mb-5 drop-shadow-md w-2/3 max-w-98 p-5 rounded-md gap-5">
                    <h2 className="font-bold text-lg">Qu’est-ce qu’une carie ?</h2>
                    <a>Une carie est une affection dentaire causée par la dégradation des tissus durs de la dent, généralement due à une combinaison de mauvaise hygiène bucco-dentaire, une alimentation riche en sucres et la présence de bactéries dans la bouche. Cela entraîne la formation de cavités dans les dents, pouvant provoquer des douleurs et des infections si non traitées.</a>
                    <h2 className="font-bold text-lg">Symptômes d’une carie</h2>
                    <a>Sensibilité dentaire : La sensibilité accrue aux aliments chauds, froids, sucrés ou acides peut être un signe précoce de carie.

                        Douleur dentaire : Une douleur persistante ou intermittente dans la dent affectée peut se manifester, en particulier lors de la mastication ou lors de la consommation de substances sucrées.

                        Taches visibles : Des taches sombres, généralement brunes ou noires, sur la surface des dents peuvent être visibles, indiquant une dégradation de l'émail dentaire.

                        Fissures ou trous dans les dents : Des cavités ou des trous dans les dents peuvent être observés visuellement ou détectés par un dentiste lors d'un examen buccal.

                        Sensibilité des gencives : Les gencives autour de la dent affectée peuvent devenir sensibles, rouges ou enflées.

                        Mauvaise haleine persistante : Une mauvaise haleine persistante peut être un symptôme de caries avancées, surtout si elle est associée à d'autres signes. </a>
                    <h2 className="font-bold text-lg">Traitement d’une carie (guérir)</h2>
                    <a>Examen dentaire : Le dentiste examine la dent affectée à l'aide d'instruments spéciaux et d'images radiographiques pour évaluer l'étendue de la carie.

                        Anesthésie locale : Si nécessaire, une anesthésie locale est administrée pour engourdir la zone autour de la dent à traiter, afin de rendre le traitement indolore.

                        Élimination de la carie : Le dentiste élimine la carie de la dent à l'aide d'une fraise dentaire, d'une turbine ou d'autres instruments. Cela implique de retirer la partie de la dent endommagée par la carie.

                        Préparation de la dent : Après l'élimination de la carie, le dentiste prépare la dent pour recevoir un matériau de restauration. Cela peut impliquer de nettoyer la zone et de la préparer pour le remplissage.

                        Obturation dentaire : Une fois que la dent est préparée, le dentiste utilise un matériau de remplissage, généralement une résine composite ou un amalgame, pour remplir la cavité laissée par la carie et restaurer la forme et la fonction de la dent.

                        Polissage et ajustement : Une fois que le remplissage est en place, le dentiste le polit pour s'assurer qu'il s'adapte correctement à la dent et pour assurer un confort optimal lors de la mastication.

                        Suivi et conseils : Le dentiste peut fournir des conseils sur la prévention des caries, tels que l'adoption d'une bonne hygiène bucco-dentaire, une alimentation équilibrée et des visites régulières chez le dentiste pour des contrôles dentaires.</a>
                </div>
            </div>
        </>
    )
}