const webBody = document.body;
const bgButton = document.getElementById("bgButton");
const sumButton = document.getElementById("sumButton");

let myWorker;


if(window.Worker)
{
    myWorker = new Worker('worker.js');
}



sumButton.addEventListener("click", event=>{
    myWorker.postMessage('start');
});

myWorker.onmessage = function(message)
{
    alert(`The sum calculated by worker ${message.data}`);
}










bgButton.addEventListener("click",event=>{
    console.log("Click 2");
    if(webBody.style.background !== 'green')
    {
        webBody.style.background = 'green';
    }else{
        webBody.style.background = 'gray';
    }
})