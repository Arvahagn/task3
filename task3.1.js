// 1...
let num = 356;
let num_lst = num % 10;
alert(num_lst);
console.log(num_lst)

// 2...
if (num_lst < 0){
    alert("Yes");
    console.log("Yes");
} else {
    alert("No");
console.log("No");
}

// 3...
let tmp_C = 32;
let tmp_F = (tmp_C * 1.8) + 32;
alert(tmp_F);
console.log(tmp_F);

// 4...
let num_1 = 4;
let num_2 = 2;
if(num_1 % num_2 != 0 && num_2 % num_1 != 0){
    alert(0);
    console.log(0);
} else{
    alert(1);
    console.log(1);  
}

// 5...
let numb_1 = 1;
let numb_2 = 2;
let numb_3 = 3;
if(numb_1 > numb_2 && numb_1 > numb_3){
    alert(numb_1);
    console.log(numb_1);
} else if(numb_2 > numb_1 && numb_2 > numb_3){
    alert(numb_2);
    console.log(numb_2);
} else{
    alert(numb_3);
    console.log(numb_3);
}
