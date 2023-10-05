import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import PomodoroTimer from '../Timer';

function Goals() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
  return (
    <div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
            <div className=" h-32 rounded-md border-2  bg-lime-100">
                <div className="grid grid-rows-3 grid-flow-col gap-1 place-items-center">
                    <div className="mt-1"><FaClock size={32} color="rose" className=''/></div>
                    <div><h3 className="text-rose-900 font-bold underline decoration-rose-900 underline-offset-2">Pomodoro Timer</h3></div>
                    <div><button
                    onClick={toggleModal}
                    class="rounded-lg border border-rose-900 w-64 bg-rose-900 text-rose-200">Start Timer</button></div>
                </div>
                {isModalOpen && (
                    <div className="fixed top-0 left-0 right-0 z-50 w-full h-full bg-black bg-opacity-60">
                        <div className="bg-white rounded-lg shadow-lg w-9/12 h-4/5 mx-auto mt-20 p-20 relative shadow-lg shadow-blue-500/50">
                        <button
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                onClick={toggleModal}>
                                <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <PomodoroTimer />
                        </div>
                    </div>
                )}
            </div>
            <div className=" h-32 rounded-md border-2  bg-cyan-100	">
                <div className="grid grid-rows-2 grid-flow-col gap-1 place-items-center">
                    <div className="mt-1"><FaClock size={32} color="black" className=''/></div>
                    <div><h3 className="text-rose-900 font-bold underline decoration-rose-900 underline-offset-2">June Monthly Goals</h3></div>
                </div>
                <div class="grid grid-rows-2 grid-flow-col pr-4 pl-10">
                    <div><p className="text-rose-900 text-sm tracking-wide">- Move to a differet country</p></div>
                    <div><p className="text-rose-900 text-sm tracking-wide"> - Loose weight</p></div>
                    <div><p className="text-rose-900 text-sm tracking-wide"> - Start my business</p></div>
                    <div><p className="text-rose-900 text-sm tracking-wide"> - Be Happy</p></div>
                </div>
            </div>
            <div className=" h-32 rounded-md border-2 bg-yellow-100">
                <div className="grid grid-rows-2 grid-flow-col gap-1 place-items-center">
                    <div className="mt-1"><FaClock size={32} color="black" className=''/></div>
                    <div><h3 className="text-rose-900 font-bold underline decoration-rose-900 underline-offset-2">Thursday Daily Goals</h3></div>
                </div>
                <div class="grid grid-rows-2 grid-flow-col pr-4 pl-10">
                    <div><p className="text-rose-900 text-sm tracking-wide">- Move to a differet country</p></div>
                    <div><p className="text-rose-900 text-sm tracking-wide"> - Loose weight</p></div>
                    <div><p className="text-rose-900 text-sm tracking-wide"> - Start my business</p></div>
                    <div><p className="text-rose-900 text-sm tracking-wide"> - Be Happy</p></div>
                </div>
            </div>
            <div className=" h-32 rounded-md border-2 bg-purple-100">
                <div className="grid grid-rows-2 grid-flow-col gap-1 place-items-center">
                    <div className="mt-1"><FaClock size={32} color="black" className=''/></div>
                    <div><h3 className="text-rose-900 font-bold underline decoration-rose-900 underline-offset-2">2023 yearly Goals</h3></div>
                </div>
                <div class="grid grid-rows-2 grid-flow-col pr-4 pl-10">
                    <div><p className="text-rose-900 text-sm tracking-wide">- Move to a differet country</p></div>
                    <div><p className="text-rose-900 text-sm tracking-wide"> - Loose weight</p></div>
                    <div><p className="text-rose-900 text-sm tracking-wide"> - Start my business</p></div>
                    <div><p className="text-rose-900 text-sm tracking-wide"> - Be Happy</p></div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Goals;