const strLength = (str)=> {
    
    let strLen = str.split('').length;
    if(strLen >=1 && strLen <= 10) {
        return strLen;
    } else {
        return 'str is empty or too long';
    }
}

module.exports = strLength