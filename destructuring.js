// Destructuring--->Object,Array,Nested

const student = {
    name: "Atif",
    age:20,
    address:"Dhaka"
}

// Old naming
// const oldName = student.name;
// console.log(oldName);

// New
const {name,age,address} = student;
console.log(name);
console.log(name,age,address);

const student1 = {
    name: "Fahim",
    age: 22,
    address: {
        city: "Rajshahi",
        zip: 1212
    },
};

// nested and name alias
const {
    name:stdName,
    address:{city,zip}
} = student1

console.log(stdName,city,zip);