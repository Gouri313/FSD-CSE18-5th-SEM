const myPromise = new Promise((resolve, reject)=> {
    let age =19;
    if(age >= 18){
        resolve("You are eligible to vote");
        else{
            reject("You are not eligible to vote");
        }
})
console.log(myPromise);
