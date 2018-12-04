const _ = {


  //Implement _.clamp()
  clamp(number, lower, upper){
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },


 // Implement .inRange()
  inRange(number, start, end){
    if (end == undefined){
      end = start;
      start = 0;
    }
    if (start>end){
      let startTemp = start;
      start = end;
      end = startTemp;
    }
    let isInRange = true;
    
    if (start <= number && number < end){
      isInRange = true;
    } else {isInRange = false};
    return isInRange;

  },

//Implement .words()
  words(str){
   return str.trim().split(" ");
  },

//Implement .pad()
pad(str, length){
    if( str.length >= length){
      return str;
    }else{

    let startPaddingLength = Math.floor( (length - str.length)/2);
    let endPaddingLength =  length - str.length   - startPaddingLength;
    let space = ' ';
        let paddedString = space.repeat(startPaddingLength) + str + space.repeat(endPaddingLength);
 	 return paddedString;

	}

}

};



// Do not write or modify code below this line.
module.exports = _;
