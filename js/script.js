let PicklesN = 0;
let TomatoesN = 0;
let MeatN = 1;


function UpdateVisuals(P,T,M){
  document.getElementById('pickleDis').innerHTML = "Pickles"+"("+P+")";
  document.getElementById('tomatoDis').innerHTML = "Tomatoes"+"("+T+")";
  document.getElementById('meatDis').innerHTML = "Meat"+"("+M+")";
}

function addTop(Type){
  if (Type == "Pickles"){
    PicklesN=PicklesN+1;
  } else if (Type == "Tomatoes"){
    TomatoesN=TomatoesN+1;
  } else if (Type == "Meat"){
    MeatN=MeatN+1;
  }
  UpdateVisuals(PicklesN,TomatoesN,MeatN)
}
function delTop(Type){
  if (Type == "Pickles"){
    PicklesN=PicklesN-1;
  } else if (Type == "Tomatoes"){
    TomatoesN=TomatoesN-1;
  } else if (Type == "Meat"){
    MeatN=MeatN-1;
  }
  UpdateVisuals(PicklesN,TomatoesN,MeatN)
}
function DisplayCurrentOrder(){
  
}
function FinishOrder(){
  
}