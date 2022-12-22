import React from 'react';
import TheRecipeForm from '../Components/TheRecipeForm';

export default function RecipeForm() {
  return (
    <div>
      <TheRecipeForm />
    </div>
  )
}

/*
const initialState = {
    mealName: '',
    description: '',
    ingredients: '',
    directions: '',
    imageURL: '',
    userId: '',
  };

export default function RecipeForm({ user }) {
  
  const [formInput, setFormInput] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput({...initialState})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateRecipe(formInput).then(() => {
        resetForm();
        navigate('/recipes');
      })
    } else {
      console.log("will it work");
      createRecipe({ ...formInput, userId: user.userId})
        .then(() => {
          resetForm();
          navigate("/recipes");
        });
    }
  }

  useEffect(() => {
    if (id) {
      getRecipeById(id).then((recipe) => {
          setFormInput({
            mealName: recipe.mealName,
            description: recipe.description,
            directions: recipe.directions,
            imageURL: recipe.imageURL,
          });
      })
    } else {
      setFormInput(initialState);
    }
  }, [id]);
  
  return (
    
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Meal Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Meal Name" />
        <Form.Text className="text-muted" onChange={handleChange}>
          {formInput.mealName || ''}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="textarea" placeholder="Enter Meal Description" />
        <Form.Text className="text-muted" onClick={handleChange}>
          {formInput.description || ''}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control type="textarea" placeholder="Enter Ingredients" />
        <Form.Text className="text-muted" onClick={handleChange}>
          {formInput.ingredients || ''}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Directions</Form.Label>
        <Form.Control type="textarea" placeholder="Enter Directions" />
        <Form.Text className="text-muted" onClick={handleChange}>
          {formInput.directions || ''}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="url" placeholder="imagejpg.com..." />
        <Form.Text className="text">
          {formInput.imageURL}
        </Form.Text>
      </Form.Group>
      <Button type='submit'>{id ? 'Update' : 'Submit'}</Button>
    </Form>
    // add a dropdown calendar and add datetime to it
    
  );
}
*/
