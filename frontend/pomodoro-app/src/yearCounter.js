import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PomodoroTimer from "./Timer";


function YearProgress() {
    const [yearProgress, setYearProgress] = useState(0);

    useEffect(() => {
        const calculateYearProgress = () => {
            const now = new Date();
            const yearStart = new Date(now.getFullYear(), 0, 1);
            const yearEnd = new Date(now.getFullYear() + 1, 0, 1);
            const totalMilliseconds = yearEnd - yearStart;
            const elapsedMilliseconds = now - yearStart;
            const progress = (elapsedMilliseconds / totalMilliseconds ) * 100;
            setYearProgress(progress);
        };
        calculateYearProgress();
        const timer = setInterval(calculateYearProgress, 100);
        return () => clearInterval(timer);
    }, []);
    return(
    <div>
       
        <div className="relative pt-6">
        <div className="flex flex-wrap mb-2 items-center justify-between px-3">
            <div className="mb-2 mr-2">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-900 bg-teal-100">
                    {yearProgress.toFixed(2)}% of the year 2023 has passed
                </span>
            </div>
            <div className="mb-2 mr-2">
                <Link to="/yearly-goals" className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-900 bg-teal-100">
                    Yearly Goals
                </Link>
            </div>
            <div className="mb-2 mr-2">
                <Link to="/monthly-goals" className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-900 bg-teal-100">
                    Monthly Goals
                </Link>
            </div>
            <div className="mb-2">
                <Link to="/daily-goals" className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-900 bg-teal-100">
                    Daily Goals
                </Link>
            </div>
        </div>
            <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-teal-200 mx-3">
                <div style={{ width: `${yearProgress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-900"></div>
            </div>
        </div>
        <PomodoroTimer/>
    </div>
    )
}

export default YearProgress;