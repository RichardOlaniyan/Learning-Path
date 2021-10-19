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

function product (a, b) {
    return a*b
}

console.log(product(3, 5))



function swap (y, i, j) { 
       var t = y[i]
       y[i] = y[j]
       y[j] = t             
}

function Sort (list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length-i-1; j++) {
            if (list[j] > list[j+1]) {
                swap(list, j, j+1)
            } else {
                
            }
            
        }
        
    }
}

 let set = [7, 2, 8, 7, 1]
 Sort(set)
set.forEach(element => {
console.log(element)
});

let mix = [2, 4, 3]
swap(mix, 0, 2)
mix.forEach(element => {
    console.log(element)
});
