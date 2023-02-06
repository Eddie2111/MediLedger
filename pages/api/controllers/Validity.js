const Test = (givenArray)=>{
    const arrayToBeFollowed = [ "MANUFRACTURER", "SUPPLIER", "DISTRIBUTOR", "RETAILER", "CUSTOMER" ];
    let result = true;
    for(let i=0; i<givenArray.length; i++){
        if(givenArray[i] !== arrayToBeFollowed[i]){
        result = false;
        break;
        }
    }
    return result;
}
module.exports = { Test }