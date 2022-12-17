import React from 'react';
import RecipeCards from '../Components/RecipeCards';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <RecipeCards />
            <h1>There should be something in between these two h1 tags</h1>
        </div>
    )
}