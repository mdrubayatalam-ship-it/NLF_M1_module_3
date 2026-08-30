// Rest Operator----> used to gather multiple elements or arguments into a single collection

function totalCal(...number){
    let total = 0;
    for(let num of number)
    {
        total += num;
    }
    return total;
}

console.log(totalCal(1,2,3));

const obj = {
    name: "Rabiot",
    age: 22,
    addrress: "California",
    Occupation: "Developer"
}

const{name, ...remaining} = obj;

console.log(remaining);