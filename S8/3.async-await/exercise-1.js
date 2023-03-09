
const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};

async function funcionAsinc(){
    
    const result = await runTimeOut();
    console.log(result);
    
}

funcionAsinc();
//runTimeOut();