import Perso from "../components/Perso";
import Button from "../components/Button";
import { MTDents } from "../components/Icons";

export default function Accueil() {
    return (
        <>
            <div className="bg-background h-screen flex items-center justify-around flex-col bg-background">
                <MTDents className="absolute right-0 top-0 m-5 w-16" />
                <h1 className="text-forground text-center text-4xl">Robin Le <br></br> Requin</h1>
                <h2 className="text-texttitle text-center">Bienvenue sur ton application préférée <br></br>
                    pour prendre soin de tes dents !</h2>
                <Perso />
                <ul className="flex items-center flex-col w-screen justify-evenly">
                    <li><Button intent="accueilnom" size="">Louise</Button></li>
                    <li><Button intent="accueilnom">Mathéo</Button></li>
                    <li><Button intent="submit">Ajouter un compte</Button></li>
                </ul>
            </div>
        </>
    )
}