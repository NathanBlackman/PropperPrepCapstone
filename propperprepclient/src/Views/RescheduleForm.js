/*import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';


const initialState = {
  cookDate: '',
  recipeId: '',
}

export default function RescheduleForm() {

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

    return (
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Time to Cook</Form.Label>
        <Form.Control type="text" placeholder="Ex. YYYY-MM-DD 00:00:00" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button type='button'>Remove From Schedule</Button>
      <Button type='submit'>Submit</Button>
    </Form>
    )
}

// In the first button add a deleteScheduledMeal function
*/