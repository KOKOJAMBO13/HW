
const mainContent = document.getElementById("main-content");
const onlyShowDiv = document.getElementById("osb"); 
const hideButton = document.getElementById("btn-hide"); 
const showButton = document.getElementById("btn-show"); 
const bigShowButton = document.getElementById("big-show-btn"); 


let text = prompt('Напиши текст:');

    document.querySelector('p').textContent = text;

hideButton.addEventListener("click", function() {
    mainContent.classList.add("hidden");
    onlyShowDiv.classList.remove("hidden"); 
    console.log("You not видеть сайт"); 
});


function showTheSite() {
    mainContent.classList.remove("hidden");
    onlyShowDiv.classList.add("hidden");
    console.log("You снова видеть сайт");
}

showButton.addEventListener("click", function() {
    showTheSite();
});

bigShowButton.addEventListener("click", function() {
    showTheSite(); 
});



const purpleButton = document.getElementById("btn-purple");

purpleButton.addEventListener("click", function() {
    mainContent.style.background = "#9c27b0"; 
});

const resetButton = document.getElementById("btn-reset-color");

resetButton.addEventListener("click", function() {
    mainContent.style.background = ""; 
});
