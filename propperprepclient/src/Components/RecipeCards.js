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
export default function RecipeCards() {
    return (
<div>
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
                Card title
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Card subtitle
            </CardSubtitle>
            <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
            <Button>
                Button
            </Button>
        </CardBody>
    </Card>
</div>
    );
};