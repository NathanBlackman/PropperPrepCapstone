import React, { useEffect, useState } from 'react';
import { getAllScheduledMeals } from '../ScheduleApiManager';
//import { getAllRecipes } from '../ApiManager';

export default function Schedule() {

    const [scheduledRecipes, setScheduledRecipes] = useState([]);
    //const [recipes, setRecipes] = useState([]);
    
/*  useEffect(() => {
        getAllRecipes().then((recipe) => {
            setRecipes(recipe);
        });
    }, []); */


    useEffect(() => {
        getAllScheduledMeals().then((scheduledRecipe) => {
            setScheduledRecipes(scheduledRecipe);
        });

        //getAllRecipes().then((recipe) => {
        //    setRecipes()

        //})
        
    }, []);

    return (
        <div>
            <h1>Schedule</h1>
            <div className='scheduled-recipe-container'>
                {scheduledRecipes ? (
                    <>
                        <div>
                            {scheduledRecipes.map((scheduledRecipe) => (
                                <div key={scheduledRecipe.id}>
                                    <h1>{scheduledRecipe.id}</h1>
                                    <h1>{scheduledRecipe.cookDate}</h1>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <h1>No Current Scheduled Meals</h1>
                )};
            </div>
        </div>
    )
}