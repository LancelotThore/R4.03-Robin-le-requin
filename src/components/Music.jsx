import React, { useRef } from 'react';
import { Play, Stop, Play2 } from './Icons';

function BtnPlay({ onClick, isPlaying }) {
  return (
    <div className="flex items-center justify-center  rounded-full p-3 border-solid border-4 border-texttitle" onClick={onClick}>
      {isPlaying ? <Play2 className="h-4 w-4"/> : <Play className="h-4 w-4"/>}
    </div>
  )
}

function BtnStop({ onClick }) {
  return (
    <div className="rounded-full p-3 border-solid border-4 border-texttitle" onClick={onClick}>
      <Stop className="h-4 w-4"/>
    </div>
  )
}

export {BtnPlay, BtnStop};