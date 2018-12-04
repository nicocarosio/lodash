const _ = {

    //***** Implementing numbers methods *****

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
    //***** Implementing string methods *****
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
      },

//***** Implementing objects methods *****
  // Implement _.has()
    has(obj, key){
    if ( obj.hasOwnProperty(key) ) {
        return true;
      } else return false;
    },
  // Implement _.invert()
    invert(obj){
      //https://stackoverflow.com/questions/39127989/creating-a-javascript-object-from-two-arrays

      var keys = Object.values(obj);
      var values = Object.keys(obj);

      var invertedObj = {};
      keys.forEach((key, i) => invertedObj[key] = values[i]);
      return invertedObj;
    },

    //Implement _.findKey()

    findKey(obj, predicateFunction){
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

      for (var property1 in obj) {
        let value = obj[property1];
        let predicateReturnValue = predicateFunction(value);
        if (predicateReturnValue){return property1;}
        }
      return undefined;
    },
  //******Array Implementation
    //Implement _.drop()

    drop(array, dropNum){
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

      let dropedArray =[];
      let start = 0;

      if(dropNum === undefined){
        start = 1;
      }else {
        {
          start = dropNum;
        }
      }
      return dropedArray = array.slice(start);
    },
    // Implement _.dropWhile()

    dropWhile(array, predicateFunction){
      //https://docs.python.org/3.5/library/itertools.html#itertools.dropwhile

      let newArray =[];

      array.forEach(item => newArray = predicateFunction(item, array.indexOf(item), array) );
      //INCOMPLETO....

      return newArray;
    }


};





// Do not write or modify code below this line.
module.exports = _;
