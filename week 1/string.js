let name="adilsha"

function reverse(name){
 let reverseName= name.split("").reverse().join("")
 return reverseName
}


console.log(reverse(name));

function join(name){
let joinStar=name.split("").join("*")
return joinStar
}
console.log(join("EARTH"));