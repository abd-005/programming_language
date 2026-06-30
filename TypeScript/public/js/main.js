"use strict";
////////////////////////////////////////////////////////////////////
//    string number any boolean union       
////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
let devs; //Union
let likely_JS;
let num;
console.log();
////////////////////////////////////////////////////////////////////
//    Function       
////////////////////////////////////////////////////////////////////
// Function that returns String 
const ageCalString = (name, age) => {
    return `Hi ${name},  your age is: ${age}`;
};
console.log(ageCalString("Fradin", 30));
// Function that returns Void | which doesn't return anything & can run operations like log
const ageCalVoid = (name, age) => {
    console.log(`Hi ${name}, you're ${age} years old!`);
};
ageCalVoid("Nadim", 20);
// Function that never returns | which never return anything & can throw error
const info = (name) => {
    throw new Error("");
};
// info("Hakim")
////////////////////////////////////////////////////////////////////
//   Array       
////////////////////////////////////////////////////////////////////
// String
const food = ["Mango", "Apple", "Watermelon"];
// Union
const foodData = ["Mango", "Apple", "Watermelon", 13, 87, false];
foodData.push(true);
foodData.push(32);
foodData.push("Banana");
console.log(foodData);
const developers = ["Hamood", 23, true];
developers[0] = "Harris";
// developers[1] = "Twenty"; // will throw error
developers[1] = 20;
developers[2] = false;
developers.pop();
developers.push("Pushed Data");
console.log(developers);
//# sourceMappingURL=main.js.map