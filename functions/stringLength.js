const stringLength = (string)=> {
    let stringLength = string.split('').length;
    let count = 0;
    for(let i=0; i<stringLength; i++){
        count++;
    }
    return count;
}

module.exports = stringLength