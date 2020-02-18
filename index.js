function produceDrivingRange (blockRange) {
    return function(start, end) {
      const starting = parseInt(start.slice(0, 2))
      const ending = parseInt(end.slice(0, 2))
      const range = ending - starting;
      if (range > blockRange) {
        return `${range - blockRange} blocks out of range`;
      } else if (range < blockRange) {
        return `within range by ${blockRange - range}`;
      }
    }
  }
  
  function produceTipCalculator(percentTip) {
    return function(total) {
      return total * percentTip
    }
  }
  
  function createDriver(name) {
    let id = 0
    return class Driver {
      constructor(name) {
        this.name = name
        this.id = id++
      }
    }
  }