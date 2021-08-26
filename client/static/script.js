const apiUrl = 'https://lap2-telegraph-api.herokuapp.com/';

initBindings()

function initBindings() {
    const path = window.location.hash.substring(1); //return query string without hash mark
    const form = document.querySelector("form");
    path ? updateContent(path): form.addEventListener("submit", e => handleForm(e));
}

function handleForm(e) {
    e.preventDefault();
    // create object from the form entries
    const data = Object.fromEntries(new FormData(e.target));
    const date = new Date();
    const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getHours()}-${date.getMinutes()}`;
    data.path = `${data.title}-${dateString}`;
    e.target.reset();  // reset the form input fields
    sendData(data);
}

async function sendData(formData) {
    try {
        validateInput(formData);
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(formData)
        }
        console.log(options);
        const res = await fetch(apiUrl, options);
        // redirect to new page
        window.location.hash =  `${formData.path}`;
        initBindings();
    } catch (err) {
        console.log(err);
        document.querySelector('#warning').innerText = err;
    }
}

function validateInput(formData) {
    Object.values(formData).forEach(value => {
        if (value === "") { throw new Error('One or more input fileds are empty') };
    });
    formData.path.split(" ").join("");
}

async function updateContent(path) {
    // hide the submission form
    const initSections = document.querySelectorAll('.initSection');
    initSections.forEach(section => { section.style.display = 'none' });
    // fetch data for that post from the server
    const res = await fetch(`${apiUrl}${path}`);
    const jsonData = await res.json();
    displayPost(jsonData);
}

function  displayPost(data) {
    // display the section with post details
    const postSection = document.querySelector("#postSection");
    postSection.style.display = 'block';
    // format date and url
    const rawDate = data.path.split('-');
    const formatDate = `${rawDate[3]}/${parseInt(rawDate[2])+1}/${rawDate[1]}`;
    // add text to each of the p elements in the 'post' section
    const fields = document.querySelectorAll('.postField');
    const values = [data.title, data.author, data.body, formatDate, `#${data.path}`];
    fields.forEach((field, i) => { field.textContent += values[i] });
}

module.exports = { initBindings, handleForm, sendData, validateInput, updateContent, displayPost };
