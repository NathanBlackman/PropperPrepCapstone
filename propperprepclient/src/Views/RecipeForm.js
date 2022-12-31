import React from 'react';
import TheRecipeForm from '../Components/TheRecipeForm';

export default function RecipeForm({ user }) {
  return (
    <div>
      <TheRecipeForm user={user}/>
    </div>
  )
}

