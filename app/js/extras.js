
var USER = localStorage.getItem('user');

if (!USER) {
    USER = window.prompt("What is your name?");
    localStorage.setItem('user', USER);
}

console.log("user", USER);
