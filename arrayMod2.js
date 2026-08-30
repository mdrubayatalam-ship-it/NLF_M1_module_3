let student = [
    {name:"Ariyan",id:134,mark:70},
    {name:"Rafiyan",id:149,mark:93},
    {name:"Rishab",id:154,mark:71},
    {name:"Riyad",id:130,mark:79},
]

let fruits = ["Apple","Banana","Guava","Dragon","Jackfruit"];
// let customFruits = fruits.find((f)=>f.length>5);  //find er kaj holo first er 5 okkhorer boro kono string khuje pelei iteration thamai diye print kore dekhabe
// let customFruits = fruits.includes("Banana");
// console.log(customFruits);

// let studentCheck = student.some((f)=> f.mark > 80
// ) // student.some() ekhane jotogula student ase tader moddhe karo ki 80+ marks ase jodi thake then true dekhabe

let studentCheck = student.every((f)=> f.mark > 60
) // every diye bujhai ekhane sobar marks ki 80 er upore jeta false but sobar marks 60 er upore

console.log(studentCheck);
