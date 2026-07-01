////////////////////////////////////////////////////////////////////
    //    string number any boolean union       
////////////////////////////////////////////////////////////////////

 

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

// const devs: {} = {
//     name: "Harris",
//     age: 23,
//     skill: true,
// } 


// Implicit type assign X optional chaining X readonly

// const developers: { readonly name: string, age: number, skill?: boolean } = {
//     name: "Hamood",
//     age: 28,
//     skill: true,
// } 


// Optimized way

// type User = {
//     readonly name: string;
//     age: number;
//     skill?: boolean;
// }


// Other way of type
// interface Persons {
//     readonly name: string;
//     age: number;
//     skill?: boolean;
// }


// const users: User = {
//     name: "Harris",
//     age: 23,
//     skill: true,
// } 

// const users: Persons = {
//     name: "Zareef",
//     age: 23,
//     skill: true,
// } 


////////////////////////////////////////////////////////////////////
        //   Enum       
////////////////////////////////////////////////////////////////////


// enum skills {
//     MERN = "MERN Stack",
//     LARAVEL = "PHP with Laravel",
//     DJANGO = "Python with Django",
//     IOS = "Flutter / Native",
// }

// const skill = skills.DJANGO

// console.log(skill)


////////////////////////////////////////////////////////////////////
        //   Method       
////////////////////////////////////////////////////////////////////


// const info = (val: string, union: string | number) => {
//     val.toUpperCase();

//     // union.toUpperCase(); // error: cause union could be number in future

//     if(typeof union === "string") {
//         // union.toUpperCase() // will cause error while wanna return number in outer scope
//         return union.toUpperCase()
//     }

//     return union + 10
// }


////////////////////////////////////////////////////////////////////
        //   OOP       
////////////////////////////////////////////////////////////////////


// Public

class Person {
    public name: string;
    public age: number;
    public skill: boolean;

    constructor (name: string, age: number, skill: boolean){
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
}

const person = new Person('Raad', 25, true)

console.log(person)


// Protected

class Employee {
    private name: string;
    private age: number;
    private skill: boolean;

    constructor (name: string, age: number, skill: boolean){
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
}

const employee = new Employee('Rafid', 28, false)

console.log(employee)


// Private

class Student {
    protected name: string;
    protected age: number;
    protected skill: boolean;

    constructor (name: string, age: number, skill: boolean){
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
}

class Teacher extends Student {

    constructor (name: string, age: number, skill: boolean){
        super(name, age, skill)
    }

    ageCal() {
        return this.age + 15
    }
}

const teacher = new Teacher('Fin', 23, true)

console.log(teacher.ageCal())

