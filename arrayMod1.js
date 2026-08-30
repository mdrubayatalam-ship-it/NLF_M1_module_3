// forEach,map,filter

let fruits = ["Apple","Banana","Litchi","Berry","Pine Apple"];

// let newFruits = fruits.forEach((f,idx)=>{
//     console.log(`${idx + 1} -->${f}`);
//     // return `${idx + 1} --> ${f}` ;  //forEach New array return korbena
// });

// let newFruits2 = fruits.map((f,idx)=>{
    // return `${idx + 1} -->${f}`; // map new array return kore
// })

// console.log(newFruits);


// filter
let newFruits2 = fruits.filter((f)=>f.length>4); //fruits er name gula toh string tai na..so ei name gular toh length ase..ei wise ami jamne chai oi condition dibo
console.log(newFruits2);
