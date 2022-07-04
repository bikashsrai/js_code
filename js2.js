// Resolving an array
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([89,45,323]);
    },5000);
    });
promise.then(values=>{
   console.log(values[1]);
});
