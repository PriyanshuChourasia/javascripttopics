const string = "javascript is fun";
const stringStr = string.split(' ').join('');

const strArr = stringStr.split('');

console.log(strArr.map((item,index)=>{
    if(index % 2 !=0)
    {
        return item.toUpperCase()
    }
    else{
        return item;
    }
}) ,"string array");