onmessage = function(message)
{

    if(message.data == 'start')
    {
        const sum =   calculateSum();
        this.postMessage(sum);
    }
    else
    {
        this.postMessage("This comes to an end");
    }
}



function calculateSum(){
    const startTime = performance.now();
    console.log("start Time",startTime);
    let sum = 0;
    for(let i=0; i<10000000000; i++)
    {
        sum = sum + i;
    }
    const endTime = performance.now();

    console.log("endTime",endTime);

    console.log(`Time taken ${endTime - startTime}  milliseconds`);

    return sum;
}
