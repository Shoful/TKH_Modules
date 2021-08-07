//https://codepen.io/shoful/pen/MWmPqWG
let names=["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];
let fname=[], lname=[], temp=[];


for(let i=0; i<names.length; i++){
   temp= names[i].split(" ");
    fname.push(temp[0]);
    lname.push(temp[1]);
}

console.log(fname);
console.log(lname);