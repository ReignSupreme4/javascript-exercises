const removeFromArray = function(arr, toBeRemoved) {
    // arr [1,2,3,4]
    // toBeRemoved 2
    //return [1,3,4]


    const newArray = []

    arr.forEach((item) => {
        if (item !== toBeRemoved) {
            newArray.push(item)
        }
    })

    return newArray 
    
};

module.exports = removeFromArray;
