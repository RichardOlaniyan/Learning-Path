var a = 7
var b = 5
if (a > 5 && b > 6 && a > 5 && b > 6) {
    console.log ("WhatsApp")    
} else {
    console.log ("Facebook")
}

let c = "";
for (let index = 0; index < 10; index++) {
    c += index;
}
console.log (c);

let k = 0; 
for (let index = 0; index < 1000; index++) {
    if (index % 3 == 0 || index % 5 == 0) {
        k += index;
        console.log ("Output: ",k);
    }
}


let j = -20
let m = 0
while (j < 7) {
    j++
    console.log ("Let's play")
}

let d = 0 
while (d < 30) {
    d++; 
    if ((d%2)==0) {
        console.log ("Chelsea", d)
    } else {
        console.log ("Barcalona", d) 
    } 
}

for (let index = 0; index < 100; index++) {
    let r = ""
    if (index % 3 == 0) {
        r += "Fizz"
    }
    if (index % 5 == 0) {
        r += "Buzz"
    }
    if (r!= ""){
        console.log (r, index)
    }
}

let y = [12, 34, 45, 56]

let z = y

z[2] = 58

console.log(y[2])

let y = 45

let z = y

z=58
console.log(y)