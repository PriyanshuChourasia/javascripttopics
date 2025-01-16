//  Object matching function
/**
 * 
 *if want to match two object of same kind
 */


const objectMatch = (obj,source)=> Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);


console.log(objectMatch({
    age:24,
    hair:'long',
    beard:true
},
{
    hair:'long',
    beard: true
}));
console.log(objectMatch({
    hair:'long',
    beard:true,
    age:54
},
{
    hair:'long',
    beard: true,
    age:54
}));
console.log(objectMatch({
    hair:'long',
    beard:true,
},
{
    hair:'long',
    beard: true
}));