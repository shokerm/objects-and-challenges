//ex1
var votes1 ={
    upvotes: 13,
    downvotes: 0,

};
var votes2 ={
    upvotes: 2,
    downvotes: 33,

};
var votes3 ={
    upvotes: 132,
    downvotes: 132,

};


function getVoteCount(votes){
    var sum =0;
    if(typeof(votes)=== 'object'){
        for (const vote in votes) {
            if(vote === 'upvotes'){
            sum += votes[vote];
            }
            else{
                sum -= votes[vote];
            }
        }
    }
    console.log(sum);

}
getVoteCount(votes1);
getVoteCount(votes2);
getVoteCount(votes3);


//ex2 
var levels = {
    a:["e","f","l"],
    b:["e","l","f"],
    c:["f","e","l"],
}
function detectmineLevel(arr){
   
  for (var i = 0; i < arr.length; i++) {

     if(arr[i] === "f"){
        return "third class lever"
     }else if(arr[i] === "e"){
        if (arr[i+1] === "l"){
            return "second class lever"
        }else{
            return "first class lever"
        }
   

 }
}
}
console.log(detectmineLevel(levels.a));
console.log(detectmineLevel(levels.b));
console.log(detectmineLevel(levels.c));


//ex3
function fiftyThirtyTwenty(ati){
    return {
        Needs: ati*0.5,
        Watnts: ati*0.3,
        Saving: ati *0.2

    };

}
var a = fiftyThirtyTwenty(10000);
var b = fiftyThirtyTwenty(50000);
var c = fiftyThirtyTwenty(13450);
console.log(a);
console.log(b);
console.log(c);

//ex4
var drinks =[

    {"name": "orange juice", "price": 20},
    {"name": "apple juice", "price": 30},
    {"name": "lemonade", "price": 10},
    {"name": "lime", "price": 40},

];
function sortDrinksWithSortMethod(drinks){
    return drinks.sort((a,b)=> a.price - b.price);

}
sortDrinksWithSortMethod(drinks);



//ex5
var item ={"baseball bat":20,};
var item2 ={"skate":10, "painting": 20};
var item3 ={"skate":200, "painting": 200, "shoes":1};

function calculateDifference(item, limit){
    var sum = 0;
    for (const i in item) {
       sum += item[i];
    }
    return sum - limit;
    
}
console.log("ex5 :"+calculateDifference(item,5));
console.log("ex5 :"+calculateDifference(item2,19));
console.log("ex5 :"+calculateDifference(item3,400));

//ex6

function generation(x,y){
    var ancestors =[
        {generation: -3, gender:"m", name: "great grandfather"},
        {generation: -3, gender:"f", name: "great grandmother"},
        {generation: -2, gender:"m", name: "grandfather"},
        {generation: -2, gender:"f", name: "grandmother"},
        {generation: -1, gender:"m", name: "father"},
        {generation: -1, gender:"f", name: "mother"},
        {generation: 0, gender:"m", name: "me"},
        {generation: 0, gender:"f", name: "me"},
    ];
    
    var offsprings =[
        {generation: 1, gender:"m", name: "son"},
        {generation: 1, gender:"f", name: "dauther"},
        {generation: 2, gender:"m", name: "grandson"},
        {generation: 2, gender:"f", name: "granddauther"},
        {generation: 3, gender:"m", name: "great grandson"},
        {generation: 3, gender:"f", name: "great granddauther"},
    
    ];

    if(x <= 0){
        for (const ancestor of ancestors) {
            if(x === ancestor.generation && y === ancestor.gender){
                return ancestor.name;
            }
        }

    }
    else{
        for (const offspring of offsprings) {
            if(x === offspring.generation && y === offspring.gender){
                return offspring.name;
            }
            
        }
    }

}

//ex7

var users = [
    {name: "barney", active: false},
    {name: "fred", active: false},
    {name: "pebbles", active: true}
    
]
function predicate(o){
    if(!o.active){
        return o;
    }
}

function dropWhile(array, predicate){
    var newArray = [];
    var i =0;
    while(i < array.length){
        if(predicate(array[i])){
            i++;
        }
        else{
            newArray.push(array[i]);
            i++;
       
        }
    }
   
    return newArray;
        
      }
     
      
    

console.log(dropWhile(users, predicate));


// ex8
var products = [
    {name: 'milk',quantity:1, price: 1.50},
    {name: 'bread',quantity:2, price: 1.00},
    {name: 'eggs',quantity:2, price: 2.00},
];

function getTotalPrice(products){
    var sum = 0;
    for (const product of products) {
        sum += product.quantity * product.price;
        
    }
    return sum;
   
}
console.log(getTotalPrice(products));

//ex9
var object = {"a":[{"b":{"c":3}}]};
// object["a"][0]["b"]["c"] ;//3

// var o1 = "a[0].b.c"; 
// var o2 = ["a","0","b","c"]; 
// var o3 = "a.b.c"; 

function get(obj, path){

    if(Array.isArray(path)){

       console.log(obj[path[path.length - 4]][path[path.length - 3]][path[path.length - 2]][path[path.length-1]]);  
   
    }
    else{
        var path = path.split(".");
        for(var i = 0; i < path.length; i++){
            if(i.includes(`[${i}]`)){
                var index = path[i].split(`[${i}]`);
                path.pop(index)
              
            }
        }
        
      
            
    }


}

get(object, ["a","0","b","c"]);
get(object, "a[0].b.c");
// get(object, "a.b.c");
