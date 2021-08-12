const reverseString = function(str) {
    // const splitString = str.split("")
    // console.log(splitString)
    
    // const reverse = splitString.reverse()
    // console.log(reverse)

    // const join = reverse.join("")
    // console.log(join)

    // return join 

    return str.split("").reverse().join("")
};

module.exports = reverseString;
    