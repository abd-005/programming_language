"use strict";
////////////////////////////////////////////////////////////////////
//    string number any boolean union       
////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
// let devs: string | number | boolean; //Union
// let likely_JS: any;
// let num: number;
// console.log()
////////////////////////////////////////////////////////////////////
//    Function       
////////////////////////////////////////////////////////////////////
// Function that returns String 
// const ageCalString = (name: string, age: number): string => {
//     return `Hi ${name},  your age is: ${age}`;
// }
// console.log(ageCalString("Fradin", 30))
// Function that returns Void | which doesn't return anything & can run operations like log
// const ageCalVoid = (name: string, age: number): void => {
//     console.log(`Hi ${name}, you're ${age} years old!`)
// }
// ageCalVoid("Nadim", 20)
// Function that never returns | which never return anything & can throw error
// const info = (name: string): never => {
//     throw new Error("");
// }
// info("Hakim")
////////////////////////////////////////////////////////////////////
//   Array       
////////////////////////////////////////////////////////////////////
// String
// const food: string[] = ["Mango", "Apple", "Watermelon"] 
// Union
// const foodData: (string | number | boolean)[] = ["Mango", "Apple", "Watermelon", 13, 87, false]
// foodData.push(true)
// foodData.push(32)
// foodData.push("Banana")
// console.log(foodData)
// Tuples
// const developers: [string, number, boolean] = ["Hamood", 23, true];
// developers[0] = "Harris";
// // developers[1] = "Twenty"; // will throw error
// developers[1] = 20; 
// developers[2] = false;
// developers.pop()
// developers.push("Pushed Data")
// console.log(developers)
////////////////////////////////////////////////////////////////////
//   Array       
////////////////////////////////////////////////////////////////////
// Implicit type assign
const devs = {
    name: "Harris",
    age: 23,
    skill: true,
};
// Implicit type assign X optional chaining X readonly
const developers = {
    name: "Hamood",
    age: 28,
    skill: true,
};
// const users: User = {
//     name: "Harris",
//     age: 23,
//     skill: true,
// } 
const users = {
    name: "Zareef",
    age: 23,
    skill: true,
};
//# sourceMappingURL=main.js.map