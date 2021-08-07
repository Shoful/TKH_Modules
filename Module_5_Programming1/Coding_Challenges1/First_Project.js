//https://codepen.io/shoful/pen/KKmGBOy
let weeklyIncome=parseInt(prompt("Weekly Income:"));
let foodCost=parseInt(prompt("Food Cost:"));
let housingCost=parseInt(prompt("Housing Cost:"));
let transportationCost=parseInt(prompt("Transportation Cost:"));
let otherCost=parseInt(prompt("Other Cost:"));
let annualSaving=parseInt(prompt("How much do you want to save in a year:"));

let weeklyCheck=Math.round(annualSaving/52);

if(weeklyIncome>=weeklyCheck){
    console.log("You make enough a week to reach your goal after a year.");
    let totalWeeklyCost = foodCost + housingCost + transportationCost + otherCost;

    let weeklySaving = weeklyIncome - totalWeeklyCost;
    
    if((weeklySaving*52)>=annualSaving){
       console.log("You are on track."); 
    }
    else{
        let x = weeklyCheck - weeklySaving;
        console.log("You need to save " + x + " amount more a week.")
    }
}
else{
    console.log("You don't make enough a week to reach your goal after a year.");
}