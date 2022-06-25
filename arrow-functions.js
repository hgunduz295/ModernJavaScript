// function logMyError(errorMessage){
//     console.error(errorMessage);
// }
// const logMyError =errorMessage=>console.error(errorMessage);
// logMyError("Bir Hata Oluştu!");
// const sumUP=(num1,num2) => num1+num2;
// console.log(sumUP(5,6));
const person={
    firstName:"Ali",
    lastName:"Veli",
    sayMyName:function(){
        console.log(this.firstName+this.lastName);
        //buradaki this bulundugu konumdaki şeylere göre çalışıyor.
    },
sayMyNameArrow:()=>{
    console.log(firstName,lastName);//window uzerindeki this cagıracak 
    // yani nesne obje veya bi önceki class vs arıyor
}
}
person.sayMyName();
person.sayMyNameArrow();