let arryNumbers = [1, 2, 3, 4, 5, 6];

function printArr(arr){
    try {
        if (typeof arr === "object") {
               console.log(arr);
        }else{
            throw new Error('Insert Array')
        }
    } catch (error) {
        console.error(error)
    }
};

printArr(arryNumbers)