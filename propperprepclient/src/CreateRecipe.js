export function createRecipe() {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'POST Request' })
    };
    fetch('https://localhost:7169/api/Recipe', requestOptions)
        .then(res => res.json())
        .then(data => this.setState({ postId: data.id }));
}