export default function Home() {
    return (
        <div className="bg-wallpaper-mobile flex-col h-screen bg-no-repeat bg-cover flex justify-center items-center">
            <img className="max-h-screen absolute bottom-0" src="/wallpaper-mobile-plus.png" alt="" />
            <h1 className="z-10 text-5xl mb-16">Bonjour</h1>
            <p className="z-10 text-4xl text-center">Bienvenue sur <br/> M'T DENTS !</p>
        </div>
    );
}