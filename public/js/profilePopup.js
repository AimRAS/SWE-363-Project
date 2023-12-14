var profileField = document.querySelector('.profile')
var profilePopup = document.querySelector('.profilePopup')
console.log("test");

function openProfilePopup() {
    profilePopup.classList.toggle('show');
    console.log("test 2223");
}

profileField.onclick = openProfilePopup