function wait( n )
{
    return new Promise( function(resolve) {
        setTimeout(resolve,n);
        resolve(n);
    });
}

 const p = wait(1000);
 console.log(p);
 setTimeout( function(){
    console.log(p);
 },2000);