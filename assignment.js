// https://github.com/samihaTasnim/assignment-3


function kilometerToMeter(kilometer) {
  if( kilometer < 0 ) {
    return "distance can't be negative";
  }
  else{
    return kilometer * 1000;
  }
}


function budgetCalculator(numOfWatch, numOfMobile, numOfLaptop) {
  if(numOfLaptop < 0 || numOfMobile < 0 || numOfWatch < 0) {
    return "please input a valid number";
  } 
  else{
    var priceOfWatch = 50;
    var priceOfMobile = 100;
    var priceOfLaptop = 500;

    var totalCost =  (numOfWatch * priceOfWatch) + (numOfMobile * priceOfMobile) + (numOfLaptop * priceOfLaptop);
    return totalCost;
  } 
}


function hotelCost(stayingDays) {
  var stayingCost1 = 100;
  var stayingCost2 = 80;
  var stayingCost3 = 50;

  if(stayingDays < 0) {
    return "day's cannot be negative"
  }
  else if(stayingDays <= 10) {
    return stayingDays * stayingCost1;
  }
  else if(stayingDays <=20) {
    var remainingDays = stayingDays - 10;
    var total = (10 * stayingCost1) + ( remainingDays * stayingCost2);
    return total;
  }
  else {
    var remainingDays = stayingDays - 20;
    var total = (10 * stayingCost1) + ( 10 * stayingCost2) + (remainingDays * stayingCost3);
    return total;
  }
}


function megaFriend(array) {
  if(array.length < 1) {
    return "input a valid array";
  }
  else {
    var biggestName = array[0];
    for(var i = 0; i < array.length; i ++) {
      if(array[i].length > biggestName.length) {
        biggestName = array[i];
      }
    }
    return biggestName;
  }
}
