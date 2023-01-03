import React, { useState, useEffect } from 'react';
import { getAllRecipes } from '../ApiManager';
//import RecipeCards from '../Components/RecipeCards';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap'; 
import { useNavigate, useParams } from 'react-router-dom';

export default function Home() {
    const [recipes, setRecipes] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams();

    const handleUpdateNavigate = () => {
        navigate(`/recipe-form/${id}`);
    }

    const handleViewNavigate = (id) => {
        navigate(`/recipe-view/${id}`);
    }



    useEffect(() => {
        getAllRecipes().then((recipe) => {
            setRecipes(recipe);
        });
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <div className='FirstScheduled'></div>
            <>
                <div className='card-container'>
                    {recipes.map((recipe) => (

                        <div className='recipe-card' key={recipe.id}>
                            <Card
                                style={{
                                width: '18rem'
                                }}
                                onClick={handleViewNavigate}
                            >
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                >
                                    Scheduled For {recipe.schedule}
                                </CardSubtitle>
                                <img
                                    alt={recipe.mealName}
                                    src={recipe.imageURL}
                                />
                                    <CardBody>
                                    <CardTitle tag="h3">
                                        {recipe.mealName}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {recipe.description}
                                    </CardSubtitle>
                                    <Button onClick={() => handleUpdateNavigate(recipe.id)} >
                                        Edit
                                    </Button>
                                    <Button>
                                        Delete
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                        /*<RecipeCards 
                            key={recipe.id}
                            recipe={recipe}
                            setRecipe={setRecipes}
                        />*/
                    ))}
                </div>
            </>     
        </div>
    )
}