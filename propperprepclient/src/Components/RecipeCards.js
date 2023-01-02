import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    Button
} from 'reactstrap';

// add the export default function thing and the return
export default function RecipeCards(recipe) {
    return (
<div key={recipe.id}>
    <Card
        style={{
            width: '18rem'
        }}
    >
        <img
            alt="Sample"
            src="https://picsum.photos/300/200"
        />
        <CardBody>
            <CardTitle tag="h5">
                {recipe.mealName}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                {recipe.description}
            </CardSubtitle>
            <CardText>
                If correct it will show here: {recipe.mealName}
            </CardText>
            <Button>
                Please Work
            </Button>
        </CardBody>
    </Card>
</div>
    );
};