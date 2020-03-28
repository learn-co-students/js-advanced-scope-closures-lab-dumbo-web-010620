produceDrivingRange = (blockRange) => {
    return function range(string1, string2){
        let numOne = parseInt(string1)
        let numTwo = parseInt(string2)
       
        //given pdr, if a different between two numbers can't be greater than the pdr
        //if so return the difference between the higher number, lower number and pdr... Math.abs(30 - 12 - pdr) 
        if (Math.abs(numOne - numTwo) < blockRange){
            return `within range by ${blockRange - Math.abs(numTwo - numOne)}`
        } else {
            return `${Math.abs(blockRange - Math.abs(numOne - numTwo))} blocks out of range`
        }
        
    }
}

produceTipCalculator = (percentage) => {
    return function tip(cost) {
       return percentage * cost
    }
}

createDriver = () => {
    let DriverId = 0 
    return class {
         constructor(driver) {
             this.name = driver;
             this.id = ++DriverId
         }

     }
}