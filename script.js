let cardItems = document.getElementById("card-items");
console.log(cardItems)

let count = 0;

function increment() {
    count = count + 1;
    cardItems.innerText = count;
}