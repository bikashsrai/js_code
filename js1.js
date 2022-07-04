var x="hi this js learning";
document.getElementById('id1');
document.write(x);

var promise = new Promise(function(resolve,reject){
    const x="hello world";
    const y ="Hello world";
    if(x===y){
        resolve();
    }else{
        reject();
    }
});
promise.then(function(){
    // console.log('You have success');
    document.write("<br>");
    document.write("on success");
}).
catch(function(){
    // console.log('Got errored');
    document.write("<br>");
    document.write("fail");
});
var promise = new Promise(function(resolve,reject){
    resolve('Geeks for geeks');
})
promise
.then(function(successMessage){
    document.write("<br>");
    document.write(successMessage);

},
function(errorMessage){
    document.write("errorMessage");

})
// Promise  Rejected
var promise= new Promise(function(resolve,reject){
    throw new Error("Some error has occured ")
})
promise
.then(function(successMessage){
    document.write(successMessage);
})
.catch(function(errorMessage){
    document.write(errorMessage);
})
