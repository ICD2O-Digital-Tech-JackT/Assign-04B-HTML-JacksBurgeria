/*Main variables*/
let Size = document.getElementById("sizeselect");
let PicklesN = 0;
let TomatoesN = 0;
let MeatN = 1;
let Drink = document.getElementById("drink");
let CurrentOrderPrice = 0;
/*Tax constant*/
const HST = 0.13;
/*function to change the order buttons text so that it says finish order, incase the text was changed to something else */
function ResetText() {
  document.getElementById("finish order").innerHTML = "Finish Order"
}
/* function to change the visuals of the site (ex. toppings num progress bad etc.)*/
function UpdateVisuals() {
  ResetText()
  /*Updating variables*/
  Drink = document.getElementById("drink");
  Size = document.getElementById("sizeselect").value;
  /*Making toppings display when they are updated*/
  document.getElementById('pickleDis').innerHTML = "Pickles" + "(" + PicklesN + ")";
  document.getElementById('tomatoDis').innerHTML = "Tomatoes" + "(" + TomatoesN + ")";
  document.getElementById('meatDis').innerHTML = "Meat" + "(" + MeatN + ")";
  /*Updating progress bar colours to show what information has been entered*/
  if (PicklesN != 0 || TomatoesN != 0 || MeatN != 1) {
    document.getElementById("BurgProg").style.backgroundColor = "green";
  } else if (Size != "medium") {
    document.getElementById("BurgProg").style.backgroundColor = "green";
  } else {
    document.getElementById("BurgProg").style.backgroundColor = "gray";
  }
  /*Updating drink progress*/
  if (Drink.value != "notchosen") {
    document.getElementById("DrinkProg").style.backgroundColor = "green";
  } else {
    document.getElementById("DrinkProg").style.backgroundColor = "gray";
  }
}
/*function to change topping numbers UP one*/
function addTop(Type) {
  /*Making sure toppings don't go above 5 before changing their amounts*/
  if (Type == "Pickles") {
    if (PicklesN < 5) {
      PicklesN = PicklesN + 1;
    }
  } else if (Type == "Tomatoes") {
    if (TomatoesN < 5) {
      TomatoesN = TomatoesN + 1;
    }
  } else if (Type == "Meat") {
    if (MeatN < 5) {
      MeatN = MeatN + 1;
    }
  }
  UpdateVisuals()
}
/*function to change topping numbers DOWN one*/
function delTop(Type) {
  /*Making sure toppings don't go below 0 before changing their amounts*/
  if (Type == "Pickles") {
    if (PicklesN > 0) {
      PicklesN = PicklesN - 1;
    }
  } else if (Type == "Tomatoes") {
    if (TomatoesN > 0) {
      TomatoesN = TomatoesN - 1;
    }
  } else if (Type == "Meat") {
    if (MeatN > 1) {
      MeatN = MeatN - 1;
    }
  }
  UpdateVisuals()
}
/*function to calculate and return the price of the order*/
function CalculatePrice() {
  Drink = document.getElementById("drink");
  Size = document.getElementById("sizeselect").value;
  CurrentOrderPrice = 0
  /*Burger price*/
  if (Size == "medium") {
    CurrentOrderPrice += 2.99
  } else if (Size == "large") {
    CurrentOrderPrice += 3.99
  } else if (Size == "jumbotron") {
    CurrentOrderPrice += 7.99
  }
  /*Toppings price*/
  CurrentOrderPrice += (PicklesN * 0.25)
  CurrentOrderPrice += (TomatoesN * 0.25)
  CurrentOrderPrice += ((MeatN - 1) * 0.85)/*Minus one because only extra meat adds to the price*/
  /*Drink price*/
  if (Drink.value != "notchosen") {
    CurrentOrderPrice += 3.50
  }
  CurrentOrderPrice *= 1+HST /*Tax*/
  CurrentOrderPrice = Math.round(CurrentOrderPrice * 100) / 100  /*Rounding price*/
  return CurrentOrderPrice /*returning the price of the order*/
}
/* function to call the calculate function and display the price of the order*/
function DisplayCurrentOrder() {
  if (document.getElementById("finish order").innerHTML != "Confirm?") {
    let result = CalculatePrice()/*Calling the function to get the price*/
    document.getElementById("WarningMsg").innerHTML = "$" + result + "<br>" + "Confirm?";/*Setting the text to ask the user if they want to confirm the order*/
    document.getElementById("finish order").innerHTML = "<p><a href='/confirm.html' alt=Confirm?>Confirm?</a></p>" /*Setting the button to a link so that when the user presses the order button one more time they get sent to the confirmed order page*/
  }
}
