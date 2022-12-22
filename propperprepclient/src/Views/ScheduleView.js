import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getScheduledMealById } from "../ScheduleApiManager";

export default function ScheduleView() {
    const [scheduledRecipe, setScheduledRecipe] = useState({})

    const { id } = useParams();

    useEffect(() => {
        getScheduledMealById(id).then((scheduledRecipe) => setScheduledRecipe(scheduledRecipe));
    }, [id]);

    return(
        <div>
            <h1>{scheduledRecipe.id}</h1>
            <h1>{scheduledRecipe.recipeId}</h1>
            <h1>{scheduledRecipe.cookTime}</h1>
        </div>
    )
}