// arguments object - no longer bound with arrow functions

// const add = function (a,b) {
//     return a+b;
// };
// console.log(add(11,99))



// this keyword - no longer bound

// const user = {
//     name: "Haneef",
//     cities: ["Philadephia", "New York", "Dublin"],
//     printPlacesLived : function () {

//     }
// }

const multiplier = {
    numbers: [3,4,5],
    multiplyBy: 6,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());