// Optional Chaining "?" and Nullish Coalescing "??"

let user1 ={
    name: "Rashed",
    address: {
        city: "Dhaka",
    },
};

let user2 ={
    name: "Rakib",
    address: {
        city: "Bogura",
    } 
}

console.log(user1.address.city);
console.log(user2?.address?.city ?? "Not given");

// Optional chaining holo jodi address na thake tile code crash korabe na kintu undefined dekhabe
// nullish coalescing e jodi address na thake taile kichu ekta default hisebe likhe dawa jai