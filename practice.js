// let movies = [
//     {title:"Interception", year: 2010, rating:7.8, genre:"Sci-Fi"},
//     {title:"Titanic", year: 1997, rating:7.9, genre:"Romance"},
//     {title:"The Matrix", year: 1999, rating:8.7, genre:"Sci-Fi"},
//     {title:"Avatar", year: 2009, rating:7.1, genre:"Sci-Fi"},
//     {title:"Notebook", year: 2004, rating:7.7, genre:"Romance"},
//     {title:"The Big Bang Theory", year:2007, rating:8.1, genre:"Sci-Fi"},
// ];

// let sortedMovies = movies.sort((a,b)=>b.rating-a.rating)
// // console.log(sortedMovies);
// let onlySci_Fi = movies.filter((p)=>p.genre==="Sci-Fi");
// console.log(onlySci_Fi);



let product = [
    {title:"Monitor",price:10000,inStock:true},
    {title:"Keyboard",price:3500,inStock:true},
    {title:"Mouse",price:1500,inStock:false},
    {title:"Power Unit",price:5000,inStock:true},
    {title:"Speaker",price:2500,inStock:false},
];

let sorted = product.sort((a,b)=>a.price-b.price);
let getInStock = product
       .filter((p)=>p.inStock === true) 
       .map((p)=>({title:p.title,price:p.price}));
console.log(getInStock);