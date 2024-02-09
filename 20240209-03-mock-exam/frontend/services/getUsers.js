export default async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('Error:', error);
    }
}