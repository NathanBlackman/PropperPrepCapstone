import React from 'react';
import TheRecipeForm from '../Components/TheRecipeForm';

export default function RecipeForm({ firebaseId }) {
  return (
    <div>
      <TheRecipeForm firebaseId={firebaseId} />
    </div>
  )
}

