import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Requin3ans, Dent, Candy, Couverts, Calendar, Chrono, Sante, DentsRemplie, Soda, Bonbon, PateTartine, Gateau, Cereale, Chips, Biscuit, Compte, Requin6ans, Requin9ans, Retour } from '../components/Icons';
import { Perso, Perso2 } from "../components/Perso";
import Timer from '../components/Timer';
import Input from '../components/Input';
import Button from '../components/Button';

export default function CreationCompte() {

    const today = new Date();
    const threeYearsAgo = new Date(today.getFullYear() - 3, today.getMonth(), today.getDate());
    const maxDate = `${threeYearsAgo.getFullYear()}-${String(threeYearsAgo.getMonth() + 1).padStart(2, '0')}-${String(threeYearsAgo.getDate()).padStart(2, '0')}`;
    const twelveYearsAgo = new Date(today.getFullYear() - 12, today.getMonth(), today.getDate());
    const minDate = `${twelveYearsAgo.getFullYear()}-${String(twelveYearsAgo.getMonth() + 1).padStart(2, '0')}-${String(twelveYearsAgo.getDate()).padStart(2, '0')}`;

    const [prenom, setPrenom] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [email, setEmail] = useState("");

    const handleAddUser = () => {
        const newUser = { prenom, email, birthDate };
        let existingUsers = JSON.parse(localStorage.getItem('users'));
        if (!Array.isArray(existingUsers)) {
            existingUsers = [];
        }
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));
    };

    return (
        <>
            <div className="h-screen bg-background pb-5 flex items-center justify-center flex-col gap-8">
                <Link to="/~thore2/robin-le-requin/accueil"><Retour className="absolute left-0 top-0 mt-7 ml-7" /></Link>
                <h1 className="text-forground text-center pt-10 text-4xl">Robin Le <br></br> Requin</h1>
                <Perso />
                <Input type="text" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                <Input type="date" props={{max: maxDate, min: minDate}} value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                <Input type="email" placeholder="Adresse mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Link to="/~thore2/robin-le-requin/accueil" disabled={!prenom || !birthDate || !email}><Button intent="accueilnom" onClick={handleAddUser} disabled={!prenom || !birthDate || !email}>Ajouter</Button></Link>
            </div>
        </>
    )
}