function getUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let rn = Math.floor(Math.random() * 10);

            if (rn > 3) {
                res(rn);
            } else {
                rej("getUsers failed");
            }
        }, 500);
    });
}

function getProducts() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let rn = Math.floor(Math.random() * 10);

            if (rn > 3) {
                res(rn);
            } else {
                rej("getProducts failed");
            }
        }, 300);
    });
}

function getOrders() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let rn = Math.floor(Math.random() * 10);

            if (rn > 3) {
                res(rn);
            } else {
                rej("getOrders failed");
            }
        }, 100);
    });
}


async function AllPromise() {

    try {
        let result=await Promise.all([  
            getProducts(),
            getUsers(),
        getOrders(),]
          
        )
         return result
    } catch (error) {
        console.log("Error ",error);
    }

   
    
}

AllPromise()
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Final Error:", error));