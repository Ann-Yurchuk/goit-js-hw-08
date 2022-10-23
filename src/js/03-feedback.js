import throttle from 'lodash.throttle';


const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");
const LOCALSTORAGE_KEY = "feedback-form-state";
let data = {};

window.addEventListener('load', () => {
    const message =JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (message) {
        form.email.value = message.email;
        form.message.value = message.message;
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log({email: form.email.value, message: form.message.value});
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
});

form.addEventListener('input', event => {
    data[event.target.name] = event.target.value;
    console.log(data);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
});

form.addEventListener("input", throttle((event) => {
        if (event.target.nodeName==="INPUT") {
            data.email = event.target.value;
        } else if (event.target.nodeName==="TEXTAREA") {
            data.message = event.target.value;
        }
        if (data) {
            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
        }
    }, 500));
if (localStorage.getItem(LOCALSTORAGE_KEY)) { 
        data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
};
