import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../ApiManager";
import TheRecipeForm from "../Components/TheRecipeForm";

export default function RecipeEditForm({ user }) {
    const { id } = useParams();
    //const [editRecipe, setEditRecipe] = useState({});\
    const [editRecipe, setEditRecipe] = useState({});

    useEffect(() => {
        getRecipeById(id).then(setEditRecipe);
    }, [id]);

    return (
        //editRecipe
        <>
            <div>
                <TheRecipeForm firebaseId={editRecipe.userId} />
            </div>
        </>
    )
}