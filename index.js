var x = 0;
var ch = "bonjour"
var bool = true





var tab = [true, 3, "bonjour"]



for (let i = 0; i < tab.length; i++) {
    console.log(" using for ", tab[i])

}


var c = 0
while (c < tab.length) {
    console.log(" using while ", tab[c])
    c++
}





for (var el of tab) {
    console.log(" using for of ", el)

}


var obj = {
    FirstName: "daly",
    LastName: "faidi",
    age: 27,
    languages: ["javacript"]
}


console.log(Array.isArray(tab));
console.log(typeof obj);


console.log("=======================================================================================");

for (var key in obj) {
    console.log(key, " : ", obj[key])
}
console.log("=======================================================================================");





obj.hobby = "motocycling"
obj["skill"] = "rust"



obj.FirstName = "mouhammed ali"
obj["LastName"] = "its faidi"
console.log(obj);

console.log("=======================================================================================");



// function that take an object as parametre and a string add that string as key to  that object and assign to it the value true
function addProp(o, s) {
    o[s] = true


    return o


}
console.log(addProp(obj, "is cool"));
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
var sum = 0;
for (var i in numbers) {
    if (i % 2 == 0) continue;
    sum += numbers[i]
}

console.log(sum);


console.log("______________________________________________________________________________________");
var counter = {
    count: 0,
    inc: function () {
       this.count++
    },
    dec: function () {
        this.count--
    }
}

console.log(counter.count);
counter.inc()
console.log(counter.count);

counter.inc()
console.log(counter.count);

counter.dec()
console.log(counter.count);
console.log("______________________________________________________________________________________");


var p = {
    name:"daly",
    age:27
}


console.log(p);


delete p["age"]

console.log(p);