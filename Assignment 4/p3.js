function deleteInvalids(array){
    if(!Array.isArray(array)) {
        return "Invalid Array!!";
    }
    
    const onlyNumberArray = array.filter(item => typeof item === 'number' && !isNaN(item));
    return onlyNumberArray;
}

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids(["1" , {num:2} , NaN ]));
console.log(deleteInvalids([ 1 , 2 , -3 ]));
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));