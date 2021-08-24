// Add event listener to form
const form = document.querySelector("form");
const btn = document.querySelector("#btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target);
    const data = Object.fromEntries(new FormData(e.target));
    const date = new Date();
    const dateString = `${date.getFullYear()}${date.getMonth()}${date.getDay()}`;
    data.dateString = `${data.title}-${dateString}`;
    console.log(data);
});

// validate the user input

// redirect user to a new url/window

// upon redirection create a fetch request for the data/post
