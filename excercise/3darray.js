//  convert array into 3d array

const data = [10,20,30,40,50,60,70,80,90];

const matrix = [];
let value = 0;



for(let i=0; i<3; i++)
{
    let newArr = [];
    for(let j=0; j<3; j++)
    {
        newArr.push(data[value]);
        value++;
    }
    matrix.push(newArr);
}


console.log(matrix);