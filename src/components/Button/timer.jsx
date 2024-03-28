import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BtnPlay, BtnStop } from './Music';
import { useState, useEffect } from 'react';

export default function Timer() {
    const [seconds, setSeconds] = useState(120);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (isRunning && seconds > 0) {
            const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
            return () => clearTimeout(timerId); // This will clear Timeout
        }
    }, [seconds, isRunning]);

    const percentage = (seconds / 120) * 100;
    const minutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;

    return (
        <>
            <div>
                <CircularProgressbarWithChildren
                    className="myProgressBar"
                    value={percentage}
                    counterClockwise={true}
                    styles={buildStyles({
                        pathColor: `rgb(9, 109, 185)`,
                        trailColor: 'transparent',
                    })}
                >
                    <div className="bg-backgroundshark w-5/6 h-5/6 rounded-full flex items-center justify-center z-10">
                        <p className='text-5xl font-bold text-forground'>{`${minutes}:${displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}`}</p>
                    </div>
                </CircularProgressbarWithChildren>
            </div >
            <div className="flex justify-center items-center gap-28 mt-5">
                <BtnPlay onClick={() => setIsRunning(true)}/>
                <BtnStop onClick={() => setIsRunning(false)}/>
            </div>
        </>
    );
}