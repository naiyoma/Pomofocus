import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addDailyGoal, getDailyGoal } from "./services/DailyGoalsService";

function DailyGoalsForm() {
    const [user, setUser] = useState(null);
    const [goal1, setGoal1] = useState('');
    const [goal2, setGoal2] = useState('');
    const [goal3, setGoal3] = useState('');
    const [goal4, setGoal4] = useState('');
    const [goal5, setGoal5] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today =  yyyy + '-' + mm + '-' + dd;

    useEffect(() => {
        const fetchData = async () => {
            const userData = JSON.parse(localStorage.getItem("POMOFOCUS_USER_DATA"));
            setUser(userData);
            try {
                const dailygoals = await getDailyGoal({
                    user_id: user.user_id, //to be tested after api changes
                    created_at: today
                });
                // If goals exist, populate the state with them
                if (dailygoals) {
                  for(var i=0 ;i<dailygoals.length;i++)
                  {
                    setGoal1(dailygoals[dailygoals.length-1].goal1);
                    setGoal2(dailygoals[dailygoals.length-1].goal2);
                    setGoal3(dailygoals[dailygoals.length-1].goal3);
                    setGoal4(dailygoals[dailygoals.length-1].goal4);
                    setGoal5(dailygoals[dailygoals.length-1].goal5);
                  }
                }
                console.log('Goals retrieved successfully:', dailygoals);
            } catch (error) {
                console.error('Error during retrieval of Goals:', error);
            }
        };

        fetchData();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await addDailyGoal({
                user_id: user.user_id,//to be tested after api changes
                goal1,
                goal2,
                goal3,
                goal4,
                goal5
            });

            console.log('Goals added successfully:', response);
            setFormSubmitted(true); // Update state to indicate form submission
        } catch (error) {
            console.error('Error during Addition of Goals:', error);
        }
    };

    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-start p-4 ">
                <h2 className="mb-8 text-2xl font-bold">Set Your Daily Goals</h2>
                {formSubmitted ? (
                    <div className="w-full max-w-lg bg-teal p-6 border border-teal-200 rounded-lg shadow dark:bg-teal-800 dark:border-teal-700 bg-teal-100">
                        <div className="text-center">Goals submitted successfully!</div>
                        <div className="card-container bg-teal">
                        <div className="card flex items-center justify-center mb-4">{goal1}</div>
                        <div className="card flex items-center justify-center mb-4">{goal2}</div>
                        <div className="card flex items-center justify-center mb-4">{goal3}</div>
                        <div className="card  flex items-center justify-center mb-4">{goal4}</div>
                        <div className="card  flex items-center justify-center mb-4">{goal5}</div>
                        </div>
                    </div>
                ) : (
                <div className="w-full max-w-lg bg-white p-6 border border-teal-200 rounded-lg shadow dark:bg-teal-800 dark:border-teal-700 bg-teal-100">
                    <form className='bg-teal-100' onSubmit={onSubmit}>
                    <div class="relative z-0 w-full mb-4 group">
            <input type="text" name="floating_email" id="floating_email" class="block py-1.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer" value={goal1} placeholder=" " onChange={(e) => setGoal1(e.target.value)} required />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Goal 1</label>
        </div>
        <div class="relative z-0 w-full mb-4 group">
            <input type="text" name="floating_email" id="floating_email" class="block py-1.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer" value={goal2} placeholder=" " onChange={(e) => setGoal2(e.target.value)} required />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Goal 2</label>
        </div>
        <div class="relative z-0 w-full mb-4 group">
            <input type="text" name="floating_email" id="floating_email" class="block py-1.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer" value={goal3} placeholder=" "  onChange={(e) => setGoal3(e.target.value)} required />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Goal 3</label>
        </div>
        <div class="relative z-0 w-full mb-4 group">
            <input type="text" name="floating_email" id="floating_email" class="block py-1.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"value={goal4} placeholder=" " onChange={(e) => setGoal4(e.target.value)} required />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Goal 4</label>
        </div>
        <div class="relative z-0 w-full mb-4 group">
            <input type="text" name="floating_email" id="floating_email" class="block py-1.5 px-0 w-full text-sm text-teal-900 bg-transparent border-0 border-b-2 border-teal-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer" value={goal5} placeholder=" " onChange={(e) => setGoal5(e.target.value)} required />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-teal-500 dark:text-teal-400 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Goal 5</label>
        </div>
                            <button type="submit" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Submit</button>
                    </form>
                </div>
                )}
            </div>
        </div>
    );
}

export default DailyGoalsForm;
