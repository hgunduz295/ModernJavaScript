const age=19;
let canHaveIt=false;
let canHaveItText="";
// if(age>=18){
//     canHaveIt=true;
// }
canHaveIt = age>=18 ? true:false;

console.log(`kullanıcı ehliyet alabilir mi? ${canHaveIt}`);
console.log(`${age>=18?"Ehliyet Alabilir":"Ehliyet Alamaz"}`);
