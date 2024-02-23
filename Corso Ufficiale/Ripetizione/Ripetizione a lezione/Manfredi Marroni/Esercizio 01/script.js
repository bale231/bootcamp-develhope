function paramsNumber(callback, ...params){
    console.log(params);
    return callback(params)
};

function callbacks(arr){
    //return arr.filter(even => even % 2 === 0)
    // let sum = 0;
    // arr.forEach(num => sum += num);
    // return sum
    //return arr.sort((a, b) => a - b)
    return arr.sort()
};

const stringArray = ["cherry", "date", "apple", "elderberry", "banana"];

//console.log(paramsNumber(callbacks, 10, 5, 4, 35, 52));
console.log(paramsNumber(callbacks, "cherry", "date", "apple", "elderberry", "banana"));