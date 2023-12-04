// alert("javascript");
// way to print in javascript
// document.write("this is a document write")

// Javascript Console API
// console.warn("This is warning message")
console.error("This is an error")
console.log("Hello world")

function average(a, b) {
    c = (a + b) / 2;
    return c;
}

c1 = average(4, 6);
c2 = average(18, 36);
console.log('radhe', c1, c2);

let age = 17;
if (age > 18) {
    console.log("you are a kids")
}
else (
    console.log("you are not a kids")
)

// if conditional ladder
if (age < 18) {
    console.log("you are not a kids")
}
else if (age < 54) {
    console.log("you kids")
}
else {
    console.log('sds')
}

let arr = [1, 2, 3, 4, 5, 6, 7]
console.log("shyam", arr)
for (let i = 0; i < arr.length; i++) {
    if (i == 2) {
        // break;
        continue;
    }
    console.log('lk', arr[i]);
}

// array foreach
arr.forEach(function (element) {
    // console.log(element)
})

// j = 0

// while (j < arr.length) { // while loop
//     console.log(arr[j]);
//     j++
// }

// do {
//     console.log('jk', arr[j]);
//     j++
// } while (j < arr.length);


let myArr = ["fan", "camera", 34, null, true]

//Array Methods
console.log('chandan', myArr.length)
// myArr.pop();
// myArr.push('ram');
// myArr.shift('');
// myArr.unshift('Radha');
// console.log(myArr)

const newLen = myArr.unshift('pink')
console.log('kl', newLen)
console.log('kr', myArr)

let myLovelystring = "this is a good girl and this good"
console.log(myLovelystring.length)
console.log(myLovelystring.indexOf('good')) // indexOf string methods
console.log(myLovelystring.lastIndexOf('girl')) // lastIndexOf string methods

console.log(myLovelystring.slice(1, 5))

d = myLovelystring.replace("this", "ram");

console.log('kp', d, myLovelystring)

let newDate = new Date();
console.log(newDate.getTime())
console.log(newDate.getFullYear())
console.log(newDate.getDay())

// Dom Manipulation 

let elem = document.getElementById('click')
console.log(elem)

let elemClass = document.getElementsByClassName('container')
console.log(elemClass)
// elemClass[0].style.background = "Yellow"
// elemClass[0].classList.add(bg - primary)

// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)

// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created post"
// th[0].appendChild(createdElement);


// Events in Javascript
firstContainer.addEventListener('click', function () {
    console.log("clicked on container")
})

/*
in console.log

id()
ineer.text

document.write('this is a js')
console.warn("This is warning message")
console.error("This is an error")
console.log("")
console.error("")
console.assert(4=(6-2))

console.log('878')
878 // string is a black

console.log(897)
897 // number is a blue


let myLovelystring = "this is a good girl"
console.log(myLovelystring.length)
console.log(myLovelystring.indexOf('a'))
console.log(typeof any var)


*/