




//Enumerate the nav-wg-list items
const wg_list = document.querySelectorAll('.nav-wg-list');
// Function to change the CSS style of a nav-wg-list icon item that has been clicked
function activeIcon() {
    wg_list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    let myWindow = document.querySelector(".mainWindow");
    myWindow.innerHTML = document.querySelector(".active").id;
}
//Add eventListener to each item in nav-wg-list icon list
wg_list.forEach((item) => item.addEventListener('click',activeIcon))