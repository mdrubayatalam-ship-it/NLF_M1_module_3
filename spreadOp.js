// Spread Operator----> Spreading the element or keys to an array and an object.

// const oldArr = ["Burger","Crispy Fried Chicken"];

// const newArr = [...oldArr,"Shwarma"];
// console.log(oldArr,newArr);

// Object
const personalInfo = {
    name: "Rafiqul Islam",
    address: "Dhaka",
}

const contactInfo = {
    phone: "01711123100",
    email: "Rafi21@gmail.com",
}

const info = {
    ...personalInfo,
    ...contactInfo,
    zip: "6060",
    Thana: "Malibag"
}

console.log(info);