import { Outlet } from 'react-router-dom';
import Button from "../components/Button";
import { Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div className="relative flex-col h-screen bg-no-repeat bg-cover flex justify-center items-center">
        <img className='h-screen absolute w-screen' src="/~thore2/robin-le-requin/wallpaper-mobile.png" alt=""/>
        <img className="h-screen absolute bottom-0 pt-2 px-2 max-w-screen" src="/~thore2/robin-le-requin/wallpaper-mobile-plus.png" alt="" />
        <h1 className="text-forground z-10 text-5xl mb-16">Bonjour</h1>
        <p className="text-forground z-10 text-4xl text-center mb-20">Bienvenue sur <br /> M'T DENTS !</p>
        <Link to="/~thore2/robin-le-requin/accueil" className='z-10'>
          <Button className="z-10" intent="accueil">Commencer</Button>
        </Link>
      </div>
    </>
  );
}