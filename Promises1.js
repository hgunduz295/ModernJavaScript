// Promises 
//sonuc donecegine dair söz veren fonksiyonlardır 
// donecek sonucla ilgili başarılı ise ayrı başarısız ise ayrı fonksiyon verebiliriz
//mesela resolve reject(başarılı ,başarısız )

const celebrateUsersBirthday = (userName) => {

    return new Promise((resolve, reject) => {

        if(!userName  || userName.length < 2 ){

            reject('Please enter a valid username');

        }

        resolve(`Happy Birthday ${userName}!`);


    });

}

const celebrateAliBirthday = celebrateUsersBirthday("").then(response => console.log(response)).catch(err => console.error(err));
//donecek sonuca gore  işlem yapmış olduk.

console.log(celebrateAliBirthday);