const mainDiv = document.getElementById("mineSweeper");



function mineBoard(){

    for(let i=0; i<12;i++)
    {
        let rowDiv = document.createElement('div');
        rowDiv.setAttribute("i",i);
        for(let j=0; j<12; j++)
        {
            const childDiv = document.createElement('div');
            childDiv.className='childMineDiv';
            childDiv.setAttribute("i",i);
            childDiv.setAttribute("j",j);
            childDiv.addEventListener("click",function(){
                onClickDiv(childDiv);
            });
            rowDiv.append(childDiv);
        }
        mainDiv.append(rowDiv);
    }
}


function onClickDiv(childDiv){
    childDiv.className = 'selectedChild';
    console.log(mainDiv);
}

mineBoard();