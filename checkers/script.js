const mainRoot = document.getElementById('root');


let box_Count = 8;
let blackPiece = "black_Piece";
let whitePiece = "white_Piece";



function gameBoard(){


    for(let i=0; i<box_Count; i++)
    {
        let secondDiv = document.createElement('div');
        secondDiv.classList.add("secondDivCss");
        secondDiv.setAttribute("i",i);
        for(let j=0; j<box_Count; j++)
        {
            let childDiv = document.createElement('div');
            childDiv.className = 'childDivStyle';
            childDiv.setAttribute("i",i);
            childDiv.setAttribute("j",j);
            let c = i+j;
            let state = c % 2=== 0;
            if(state === true)
            {
                childDiv.classList.add("whiteBox")
            }
            else if(state === false){
                childDiv.classList.add("blackBox");
            }

            secondDiv.append(childDiv);
        }
        mainRoot.append(secondDiv);
    }

    placeWhiteGoti();
    placeBlacKGoti();
    
    console.log(mainRoot,"main Root")
}


function placeWhiteGoti(){    
    let mainChildNode = mainRoot.childNodes;

    for(let i = 0; i < 3; i++)
    {
        let divChildNode = mainChildNode[i].childNodes;
        let chilNodeAttr_I = mainChildNode[i].childNodes[i].getAttribute("i");
        for(let j=0; j< 8; j++)
        {
            let chilNodeAttr_J = mainChildNode[j].childNodes[j].getAttribute("j");
            let gotiDiv = document.createElement('div');
            gotiDiv.classList.add("whiteGoti");
            let sum = Number(chilNodeAttr_I) + Number(chilNodeAttr_J);
            let state = sum % 2 !== 0;
            if(state === true)
            {
                divChildNode[j].classList.add('selectedBox');
                divChildNode[j].appendChild(gotiDiv);
                divChildNode[j].setAttribute("value",whitePiece)
            }
        }
    }
}
function placeBlacKGoti(){    
    let mainChildNode = mainRoot.childNodes;

    for(let i = 7; i > 4; i--)
    {
        let divChildNode = mainChildNode[i].childNodes;
        let chilNodeAttr_I = mainChildNode[i].childNodes[i].getAttribute("i");
        for(let j=0; j < 8; j++)
        {
            let chilNodeAttr_J = mainChildNode[j].childNodes[j].getAttribute("j");
            let gotiDiv = document.createElement('div');
            gotiDiv.classList.add("blackGoti");
            let sum = Number(chilNodeAttr_I) + Number(chilNodeAttr_J);
            let state = sum % 2 !== 0;
            if(state === true)
            {
                divChildNode[j].classList.add('selectedBox');
                divChildNode[j].appendChild(gotiDiv);
                divChildNode[j].setAttribute("value",blackPiece)
            }
        }
    }
}


gameBoard();