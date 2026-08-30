// forEach,map,filter

let fruits = ["Apple","Banana","Litchi"];

let newFruits = fruits.forEach((f,idx)=>{
    console.log(`${idx + 1} -->${f}`);
    // return `${idx + 1} --> ${f}` ;  //Return korle kintu kichu asbena
});

let newFruits2 = fruits.map((f,idx)=>{
    return `${idx + 1} -->${f}`;
})

console.log(newFruits);