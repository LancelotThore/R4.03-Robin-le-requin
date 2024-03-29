import { Requin3ans, Requin6ans, Requin9ans } from "./Icons";

function Perso() {
    const user = JSON.parse(sessionStorage.getItem('selectedUser'));
    let age;

    if (user) {
        const birthDate = new Date(user.birthDate);
        age = new Date().getFullYear() - birthDate.getFullYear();
    }

    let Requin = Requin3ans; // Default to Requin3ans
    if (age >= 3 && age <= 5) {
        Requin = Requin3ans;
    } else if (age >= 6 && age <= 8) {
        Requin = Requin6ans;
    } else if (age >= 9 && age <= 12) {
        Requin = Requin9ans;
    }

    return (
        <div className="flex items-center justify-center bg-backgroundshark w-64 h-64 p-4 rounded-full">
            <div className="bg-texttitle w-56 h-56 rounded-full flex items-center justify-center">
                <Requin className="max-w-52 max-h-40" />
            </div>
        </div>
    )
}

function Perso2() {

    const user = JSON.parse(sessionStorage.getItem('selectedUser'));
    let age;

    if (user) {
        const birthDate = new Date(user.birthDate);
        age = new Date().getFullYear() - birthDate.getFullYear();
    }

    let Requin = Requin3ans; // Default to Requin3ans
    if (age >= 3 && age <= 5) {
        Requin = Requin3ans;
    } else if (age >= 6 && age <= 8) {
        Requin = Requin6ans;
    } else if (age >= 9 && age <= 12) {
        Requin = Requin9ans;
    }

    return (
        <div className="flex items-center justify-center bg-backgroundshark w-32 h-32 rounded-full">
            <div className="bg-texttitle w-28 h-28 rounded-full flex items-center justify-center">
                <Requin className="max-w-12 max-h-12" />
            </div>
        </div>
    )
}

export {Perso, Perso2}