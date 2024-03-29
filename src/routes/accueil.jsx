import React, { useEffect, useState } from 'react';
import { Perso } from "../components/Perso";
import Button from "../components/Button";
import { MTDents } from "../components/Icons";
import { Link } from 'react-router-dom';
import Robin from '../components/Robin';

export default function Accueil() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const cachedUsers = JSON.parse(localStorage.getItem('users'));
        if (Array.isArray(cachedUsers)) {
            setUsers(cachedUsers);
        }
    }, []);

    const handleUserSelect = (user) => {
        sessionStorage.setItem('selectedUser', JSON.stringify(user));
    };

    return (
        <>
            <div className="bg-background h-screen flex items-center justify-around flex-col">
                <MTDents className="absolute right-0 top-0 m-5 w-16" />
                <Robin />
                <h2 className="text-texttitle text-center">Bienvenue sur ton application préférée <br></br>
                    pour prendre soin de tes dents !</h2>
                <Perso />
                <div className="flex items-center flex-col w-screen gap-4">
                    {users.map((user, index) => (
                        <Link to="/preambule"><Button key={index} intent="accueilnom" onClick={() => handleUserSelect(user)}>{user.prenom}</Button></Link>
                    ))}
                    <Link to="/ajoutercompte"><Button intent="submit">Ajouter un compte</Button></Link>
                </div>
            </div>
        </>
    );
}