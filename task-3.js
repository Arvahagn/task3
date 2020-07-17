let numb = 97;
// 1...
if(numb % 2 != 0) {
    alert("odd");
    console.log("odd")
} else{
    alert("even");
    console.log("even")
}

// 2...
let n = 7;
let intervalSum = 0;
for (let i = 0; i < n; i++){
    if(n % 2 != 0) {
        intervalSum += i;
    } 
}
alert(intervalSum += 1);
console.log(intervalSum += i)

// 3...

let n_1 = 65;
let n_2 = 98;
let n_3 = 99;

if(n_3 > n_1 && n_3 < n_2){
    alert("In bounds");
    console.log("In bounds");
} else{
    alert("Out of bounds");
    console.log("Out of bounds");
}

// 4...
let Sd_1;
let Sd_2;
let Sd_3;
if((Sd_1 + Sd_2) > Sd_3 && (Sd_2 + Sd_3) > Sd_1 && (Sd_1 + Sd_3) > Sd_2){
    alert("Yesss");
    console.log("Yesss");
} else{
    alert("No");
    console.log("No");
}
