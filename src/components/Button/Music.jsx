import React, { useRef } from 'react';

function MusicPlayer() {
  const audioRef = useRef(); // Crée une référence pour l'élément audio

  const playMusic = () => {
    audioRef.current.play(); // Joue la musique
  };

  const pauseMusic = () => {
    audioRef.current.pause(); // Met la musique en pause
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <audio ref={audioRef} src="chemin_vers_votre_fichier_musique.mp3" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={playMusic}>
        Jouer
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={pauseMusic}>
        Pause
      </button>
    </div>
  );
}

export default MusicPlayer;