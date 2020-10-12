// window.addEventListener("load", getInfo);

function getInfo() {
    var HOTDOG_COST = 3.25;
    var FRENCHFRIES_COST = 2.00;
    var DRINK_COST = 1.50;

    var numHotdogs = prompt("How many hotdogs? ($3.25)");
    var hotdogsTotal = (HOTDOG_COST * numHotdogs);
    document.getElementById("numHotdogs").innerText = numHotdogs;
    document.getElementById("hotdogsTotal").innerText = hotdogsTotal.toFixed(2);


    numFrienchfries = prompt("How many french fries? ($2.00)");
    var frenchfriesTotal = (FRENCHFRIES_COST * numFrienchfries);
    document.getElementById("numFrenchfries").innerText = numFrienchfries;
    document.getElementById("frenchfriesTotal").innerText = frenchfriesTotal.toFixed(2);


    numDrinks = prompt("How many drinks? ($1.50)");
    var drinksTotal = (DRINK_COST * numDrinks);
    document.getElementById("numDrinks").innerText = numDrinks;
    document.getElementById("drinksTotal").innerText = drinksTotal.toFixed(2);

    subtotal = hotdogsTotal + frenchfriesTotal + drinksTotal;
    if (subtotal >= 20.00) {
        document.getElementById("subtotalMessage").innerText = "You qualified for our 10% discount";
        subtotal = 0.9 * subtotal;
    }
    document.getElementById("subtotal").innerText = subtotal.toFixed(2);

    var mealsTax = (0.0625 * subtotal);
    var total = subtotal + mealsTax;
    document.getElementById("mealsTax").innerText = mealsTax.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}

