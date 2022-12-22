import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../ApiManager";
import TheRecipeForm from "../Components/TheRecipeForm";

export default function RecipeEditForm() {
    const { id } = useParams();
    const [editRecipe, setEditRecipe] = useState({});

    useEffect(() => {
        getRecipeById(id).then(setEditRecipe);
    }, [id]);

    return (
        <>
            <div>
                <TheRecipeForm user={editRecipe} />
            </div>
        </>
    )
}