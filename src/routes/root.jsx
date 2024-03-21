import { Outlet } from 'react-router-dom';
import Button from "../components/Button";
import {Link} from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div className="relative flex-col h-screen bg-no-repeat bg-cover flex justify-center items-center">
          <img className='h-screen absolute -z-10 w-screen' src="/wallpaper-mobile.png" alt="" />
          <img className="-z-10 max-h-screen absolute bottom-0" src="/wallpaper-mobile-plus.png" alt="" />
          <h1 className="z-10 text-5xl mb-16">Bonjour</h1>
          <p className="z-10 text-4xl text-center mb-20">Bienvenue sur <br/> M'T DENTS !</p>
          <Link to="/accueil">
            <Button className="z-10" intent="accueil">Commencer</Button>
          </Link>
        </div>
      <Outlet/>
    </>
  );
}