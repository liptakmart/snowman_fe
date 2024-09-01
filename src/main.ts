import { Person } from './person';

// Add an event listener to run the function when the page has fully loaded
window.addEventListener('load', main);

// Function to display "Hello, World!" in the console when the page is loaded
function main() {
    console.log("1");
    const john = new Person('John Doe', 32);
    alert("person:" + john.greet());
}