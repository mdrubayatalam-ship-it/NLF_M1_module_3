// reduce, sort, chaining

let product = [
    {title:"Monitor",price:10000,inStock:true},
    {title:"Keyboard",price:3500,inStock:true},
    {title:"Mouse",price:1500,inStock:false},
    {title:"Power Unit",price:5000,inStock:true},
    {title:"Speaker",price:2500,inStock:false},
];

// reduce-->জাভাস্ক্রিপ্ট (JavaScript) এ reduce() মেথড মূলত একটি অ্যারে (Array)-এর সব উপাদানকে একটিমাত্র আউটপুটে রূপান্তর করতে ব্যবহার করা হয়। এটি অ্যারের প্রতিটি উপাদানের ওপর একটি ফাংশন চালায় এবং সবশেষে একটি সিঙ্গেল ভ্যালু (যেমন: একটি সংখ্যা, স্ট্রিং, অবজেক্ট বা নতুন অ্যারে) রিটার্ন করে।

// Accumulator: এটি একটি জমানো ভান্ডার বা ব্যাগের মতো। প্রতিবার লুপ ঘোরার পর যে রেজাল্ট আসে, তা এখানে জমা থাকে।

// CurrentValue: লুপে বর্তমানে অ্যারের যে উপাদানটি প্রসেস হচ্ছে।

// InitialValue: একদম শুরুতে accumulator-এর মান যা দিয়ে হিসাব শুরু হবে।

let totalPrice = product.reduce((acc,current)=>{
     return (acc += current.price);
},0);

// console.log(totalPrice);


// Sorting with sort method

// let sorted = [10,50,20,35,900,4,75].sort((a,b)=>a-b); // this is for acsending order
// let sorted = [10,50,20,35,900,4,75].sort((a,b)=>b-a); // this is for acsending order

let sorted = product.sort((a,b) => a.price - b.price);
// console.log(sorted);

//filtering

let filtered = product.filter((p) => p.inStock === true);
console.log(filtered);
