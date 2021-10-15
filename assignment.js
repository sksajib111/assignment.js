// https://github.com/sksajib111/assignment.js

//kilometerToMeter

function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000;
  return meter;
}

  //convert your distance, kilometer to meter.
  //var distance = (1.5);
  //var goingTo = kilometerToMeter(distance);
  //console.log('Meter:',goingTo);


//budgetCalculator

function budgetCalculator(clock, phone, laptop){
  
  var clockPrice = clock * 50;
  
  var phonePrice = phone * 100;

  var laptopPrice = laptop * 500;

  var totalAmount = clockPrice + phonePrice + laptopPrice;

  return totalAmount;

}
 
//var electronicBile = budgetCalculator(8, 6, 4);
//console.log(electronicBile);



//hotelCost

  function hotelCost(totalDay){
    var totalCost = 0;

    if(totalDay <= 10){
      totalCost = totalDay * 100;
    }
    else if(totalDay <=20){
      var first10Days = 10 * 100;
      var remaining = totalDay - 10;
      var second10Days = remaining * 80;
      totalCost = first10Days + second10Days;
    }
    else{
      var first10Days = 10 * 100;
      var second10Days = 10 * 80;
      var remaining = totalDay - 20;
      var moreDays = remaining * 50;
      totalCost = first10Days + second10Days + moreDays;
    }
    return totalCost;
  }
  //var totalBill = hotelCost(25);
  //console.log(totalBill);


//megaFriend

//var megaFriend = ["sajib", "sakib", "mim", "omit", "ashifur"];
//var count = 0;
//for(i = 0; i < megaFriend.length; i++){
  //var char = megaFriend[i];
  //if(char == " "){
    //count++;
  //}
//}
//console.log(count);
