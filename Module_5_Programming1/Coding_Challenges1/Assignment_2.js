//https://codepen.io/shoful/pen/zYwmLQm
let marks=parseInt(prompt("Enter your marks:"));

if(marks>95){
    console.log("A+ grade");
}
else if(marks>88 && marks<=95){
    console.log("A grade");
}
else if(marks>84 && marks<=88){
    console.log("B+ grade");
}
else if(marks>76 && marks<=84){
    console.log("C+ grade");
}
else if(marks>70 && marks<=76){
    console.log("C grade");
}
else if(marks>67 && marks<=70){
    console.log("D+ grade");
}
else if(marks>64 && marks<=67){
    console.log("D grade");
}
else{
    console.log("F grade");
}