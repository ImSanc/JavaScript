const cart = [];

function main(){
    createOrder(cart)
    .then( (data)=> {
        console.log(data);
        const response = proceedToPayment(data);
        
    })
    .then( (data)=> {
        console.log(data);
        const response = orderSummary();
        
    } )
    .catch((err)=>{
        console.log(err.message);
    })
}

function createOrder(cart){
    return new Promise( (resolve,reject)=>{
        if(cart.length === 0){
            const err = new Error("Couldn't create an Order")
            reject(err);
        }
        const orderId = 12345;
        if(orderId){

            resolve(orderId);
        }
    } );
}

function proceedToPayment(orderId){

    return new Promise( (resolve,reject)=>{
        if(orderId){
            resolve(orderId);
        }

        const err = new Error("Order not created, payment failed");
        reject(err);
    } );
}

function orderSummary(){
    return new Promise( (resolve,reject)=>{

        if( cart.length === 0 ){
            reject(new Error("Cart was empty"));
        }

        resolve(cart);
    })
}

main();