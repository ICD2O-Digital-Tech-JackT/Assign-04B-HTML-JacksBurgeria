let Size = document.getElementById("sizeselect");
let PicklesN = 0;
let TomatoesN = 0;
let MeatN = 1;
let Drink = document.getElementById("drink");
let CurrentOrderPrice = 0
const HST = 0.13;

function ResetText() {
  document.getElementById("finish order").innerHTML = "Finish Order"
}

function UpdateVisuals() {
  ResetText()
  Drink = document.getElementById("drink");
  Size = document.getElementById("sizeselect").value;
  document.getElementById('pickleDis').innerHTML = "Pickles" + "(" + PicklesN + ")";
  document.getElementById('tomatoDis').innerHTML = "Tomatoes" + "(" + TomatoesN + ")";
  document.getElementById('meatDis').innerHTML = "Meat" + "(" + MeatN + ")";
  if (PicklesN != 0 || TomatoesN != 0 || MeatN != 1) {
    document.getElementById("BurgProg").style.backgroundColor = "green";
  } else if (Size != "medium") {
    document.getElementById("BurgProg").style.backgroundColor = "green";
  } else {
    document.getElementById("BurgProg").style.backgroundColor = "gray";
  }
  if (Drink.value != "none") {
    document.getElementById("DrinkProg").style.backgroundColor = "green";
  } else {
    document.getElementById("DrinkProg").style.backgroundColor = "gray";
  }
}

function addTop(Type) {
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
function delTop(Type) {
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

function CalculatePrice() {
  Drink = document.getElementById("drink");
  Size = document.getElementById("sizeselect").value;
  CurrentOrderPrice = 0
  if (Size == "medium") {
    CurrentOrderPrice += 2.99
  } else if (Size == "large") {
    CurrentOrderPrice += 3.99
  } else if (Size == "jumbotron") {
    CurrentOrderPrice += 7.99
  }
  CurrentOrderPrice += (PicklesN * 0.25)
  CurrentOrderPrice += (TomatoesN * 0.25)
  CurrentOrderPrice += ((MeatN - 1) * 0.85)/*Minus one because only extra meat adds to the price*/

  if (Drink.value != "notchosen") {
    CurrentOrderPrice += 3.50
  }
  CurrentOrderPrice *= 1.13 /*Tax*/
  CurrentOrderPrice = Math.round(CurrentOrderPrice * 100) / 100
  return CurrentOrderPrice
}
function DisplayCurrentOrder() {
  if (document.getElementById("finish order").innerHTML != "Confirm?") {
    let result = CalculatePrice()
    document.getElementById("WarningMsg").innerHTML = "$" + result + "<br>" + "Confirm?";
    document.getElementById("finish order").innerHTML = "<p><a href='/confirm.html' alt=Confirm?>Confirm?</a></p>"
  }
}
