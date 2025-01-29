// creating a 2d array from a single array


const data = [20,50,6,7,11,12,57,98];


let matrix = [];
let value = 0;

for(let i=0; i<4;i++)
{
    let newArr = [];
    for(let j=0; j<2; j++)
    {
        newArr.push(data[value]);
        value++;
    }
    matrix.push(newArr);
}

console.log("matrix array",matrix);
