import Button from "../../components/Button/Button";
import { Requin3ans } from "../../components/Button/Icons";
import Robin from "../../components/Button/Robin";

export default function Accueil() {
    return (
        <>
            <div className=" h-screen ">
                <img className="absolute right-0 top-0 m-5 w-16" src="/img/MTDents.svg"></img>
                <Robin/>
                <h2 className="text-texttitle text-center pt-10">Bienvenue sur ton application préférée <br></br>
                    pour prendre soin de tes dents !</h2>
                <div className="w-2/3 max-w-xs mx-auto rounded-full bg-backgroundshark aspect-square flex justify-center items-center mt-20">
                    <div className="rounded-full bg-buttoncompte aspect-square p-8 flex items-center">
                        <Requin3ans className="w-40"></Requin3ans>
                    </div>
                </div>
                <ul className="flex items-center flex-col mt-10 w-screen gap-4">
                    <li className=""><Button intent="accueilnom" size="">Louise</Button></li>
                    <li className=""><Button intent="accueilnom">Mathéo</Button></li>
                    <li><Button intent="submit">Ajouter un compte</Button></li>
                </ul>
            </div>
        </>
    )
}