str ="Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep i keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, ";
let arr = str.split("");
for(let i=0; i<arr.length; i++){
    if(arr[i]=="s" || arr[i]=="S"){
        arr[i]="$";
    }
}

str=arr.join(' ');
console.log(str);