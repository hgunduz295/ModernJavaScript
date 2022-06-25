const user = {

    firstName:"Ali",
    lastName:"Veli",
  
  };
  
  const address = {
  
    country:"Turkey",
    city:"Bursa",
    street:"Barbaros"
  
  };
  const userAddress = {...user,...address};
  console.log(userAddress);
// const newUser = {...user};
// console.log(newUser);

const newUserWithId = {id:1,...user};

console.log(newUserWithId);

//neden  spread operator kullanmalıyız
// const newUser=user;
// console.log(newUser);

// user.firstName="Arman";
//  console.log(newUser);
 // bu değerini degil referansını tutar içlerinden birini değiştirince 
 //diğerlerinide değiştirmiş oluruz

 /*bu yuzden bir kopyasını istiyorsak süslü parantez icinde 
 spread operator kullanarak yapmalıyız */
// const newUser={...user};
//  console.log(newUser);

// user.firstName="Arman";
//  console.log(newUser);
 const {country,...newUser}={...userAddress};
 console.log(country,newUser);
 