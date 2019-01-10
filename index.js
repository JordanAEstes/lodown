'use strict';

// YOU KNOW WHAT TO DO //
/**
* identity: Returns arguments unchanged.
* 
* @param {arguments} any value: takes any value.
* @return {arguments}: returns any value.
*/
function identity(args){
    return args;
}
module.exports.identity = identity;


/**
* typeOf: Return the type of value passed as a string.
* 
* @param {arguments} value: takes any value.
* @return {string}: returns a string of the type of object passed as parameter.
*/
function typeOf(value){
   if(typeof(value) === "object"){
        if (Array.isArray(value)){
            return 'array'; //return false if value is an array
        } else if (value === null){ //check to see that value isnt null
            return 'null';//return false is value is null
        } else if (value instanceof Date){ //check to make sure value isnt a date
            return 'date';// return false if value is a date
        } else if (typeof value === "object"){// check if vale is an object
            return 'object';//return true if value is an object.
        }
    } else {
        return typeof(value);
    }
}
module.exports.typeOf = typeOf;


/**
* first: Takes an array and a number, if the array argument isnt an array it returns an empty array.
* If the number argument isn't a number it returns the first element of the passed array. If the arguments
* are right it returns the first number of items in the array.
* 
* @param {Array} array: an array from which we are getting our values.
* @param {Number} num: the number of elements we want from the array.
* @return {Array}: returns an array of elements that is number long.
*/
function first(array, num){
    var retArray = [];
     //1) If <array> is not an array, return []
     if (! Array.isArray(array)){
         return [];
     }
    //2) If <number> is not given or not a number, return just the first element in <array>.
    if (typeof(num) !== 'number'){
        return array[0];
    }
    //if number is negative return -1
    if (num < 0){
        return [];
    }
    //if <number> is greater than <array>.length
    if (num > array.length){
        return array;
    }
    //3) Otherwise, return the first <number> items of <array>
    for (var i = 0; i < num; i++){
        retArray.push(array[i]);
    }
    return retArray;
}
module.exports.first = first;


/** 
* last: Takes an array and a number, if the array argument isnt an array it returns an empty array.
* If the number argument isn't a number it returns the last element of the passed array. If the arguments
* are right it returns the last number of items in the array.
* 
* @param {Array} array: an array from which we are getting our values.
* @param {Number} num: the number of elements we want from the array.
* @return {Array}: returns an array of elements that is number long.
*/
function last(array, num){
    var retArray = [];
     //1) If <array> is not an array, return []
     if (! Array.isArray(array)){
         return [];
     }
    //2) If <number> is not given or not a number, return just the first element in <array>.
    if (typeof(num) !== 'number'){
        return array[array.length - 1];
    }
    //if number is negative return an empty array
    if (num < 0){
        return [];
    }
    //if <number> is greater than <array>.length
    if (num > array.length){
        return array;
    }
    //3) Otherwise, return the first <number> items of <array>
    for (var i = array.length - num; i < array.length; i++){
        retArray.push(array[i]);
    }
    return retArray;
}
module.exports.last = last;


/** 
* indexOf: Searches array and returns the first instance of the value we gave it. If the value is not
* in the array it returns '-1'.
* 
* @param {Array} array: An array to check.
* @param {arguments} value: Any value to search for.
* @return {Number}: Returns the index of the value we searched for.  If the value doesn't exist in
* the array, it returns '-1'.
*/
function indexOf(array, value){
    for (var i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;


/**
* contains: Return a boolean based on whether the array contains value. If it does contain it returns true,
* if it doesn't return false.
* 
* 
* @param {Array} array: An array of values to check.
* @param {arguments} value: A value we are checking if the array contains.
* @return {Boolean}: Returns a boolean value of true if the value is found in the array,
* and false if it isnt.
*/
function contains(array, value){
   return (array.indexOf(value) === -1) ? false: true}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
* unique: Takes an array of elements an returns an array with the duplicate elements removed.
* 
* @param {Array} array: An array of elements.
* @return {Array}: An array of values with the duplicate values removed.
*/
function unique(array){
    var newArray =[];
    for (var i = 0; i < array.length; i++){
        if(newArray.indexOf(array[i]) === -1){
            newArray.push(array[i]);
        }
        
    }
    return newArray;

}
module.exports.unique = unique;


/** 
* filter: Calls a function on each element of an array, passing the arguments the element, its index
* and the array.  It returns a new array of elements that returned true for the called function.
* 
* @param {Array} array: An array of elements to test.
* @param {Function} func: A function that testes each element of the array.
* @return {Array}: Returns a new array of all the elements returned true from the function.
*/
function filter(array, func){
    var newArr = [];
    for (let i = 0; i < array.length; i++){
        if((typeof func(array[i], i, array)) === 'boolean' && (func(array[i], i, array)) === true){
            newArr.push(array[i]);
        }
    }
    return newArr;
}
module.exports.filter = filter;


/** 
* reject: Calls a function on each element of an array, passing the arguments the element, its index
* and the array.  It returns a new array of elements that returned false for the called function.
* 
* @param {Array} array: An array of elements to test.
* @param {Function} func: A function to test the elements in the array.
* @return {Array}: Returns a new array of elements that returned false from the function.
*/
function reject(array, func){
    return filter(array, function(elem, index, coll){
        if(func(elem, index, coll) === false){
            return true;
        }
    });
}
module.exports.reject = reject;


/** 
* partition: Calls a function on each element of an array, passing the arguments the element, its index
* and the array.  It returns a new array with two subarrays one of elements that returned true from the called 
* function and one of elements that returned false for the called function.
* 
* @param {Array} array: An array of elements to be sorted.
* @param {Function} func: A function to test the elements passed to it from the array.
* @return {Array}: Returns an array with two subarrays, one for values that returned true from the called function
* and one that returns false from the called function.
*/
function partition(array, func){
    //create new array to return
    var retArray = [[], []];
    //using _.each pass the array and a function that checks the truthiness and parses to the correct sub array
   each(array, function(elem, index, array){
       //if the element passes the test func push the value into the first subarray
        if (func(elem) === true){
            retArray[0].push(elem);
        // if it fails the test push it into the second subarray
        } else {
            retArray[1].push(elem);
        }
   });
   //return the new array that contains the subarrays
    return retArray;
}
module.exports.partition = partition;


/**
* map: Calls a function on each value of a collection.  If the collection is an array the element, index, and collection
* are passed into the function.  If the collection is an object the value, its keys, and the collection are passed
* into the function.  The return values of the called function are saved in a new array and are returned.
* 
* @param {Object or Array} coll: A collection whos values and indexes are passed into the function.
* @param {Function} func: A function that takes the element, index, and collection and returns a value.
* @return {Array}: Returns all of the collected values returned from the called function.
*/
function map(coll, func){
    //create return array
    var retArray = [];
    //use _.each to check each element of the collection 
    each(coll, function(elem, index, coll){
        //use an anonymous function to push the return values from the test func into a new array
        retArray.push(func(elem, index, coll));
    });
    //return the new array
    return retArray;
}
module.exports.map = map;


/**
* pluck: Takes an array of objects and returns an array of the value of the specified property of each object.
*
* @param {Arry of Objects} arrOfObjs: An array of objects.
* @param {String} prop: A specified property of each object whose value we are trying to collect.
* @return {Array}: Returns an array of the values from each object that have the key of a specified property
*/
function pluck(arrOfObjs, prop){
    //create a return array to store values
    var retArray = [];
    //use _.map to check if each object has the property of prop
    map(arrOfObjs, function(elem, index, arrOfObjs){
        if(arrOfObjs[index].hasOwnProperty(prop)){
            //push the value of prop to the array
            retArray.push(arrOfObjs[index][prop]);
        }
        
    });
    //return new array
    return retArray;
}
module.exports.pluck = pluck;


/**
* every: Calls a function on each value of a collection.  If the collection is an array the element, index, and collection
* are passed into the function.  If the collection is an object the value, its keys, and the collection are passed
* into the function.  If all of the return values from the called function are true it returns true. If even one of the
* returned values from the called function is false, return false. If a function is not passed in it returns true if all 
* the elements are truthy, otherwise it returns false.
*
* @param {Object or Array} collection: An object or array whose elements are passed into the called function.
* @param {Function} func: A function that takes the element, index, and collection and returns a boolean value.
* @return {Boolean}: Returns a boolean value of true if all elements passed into the called function return true. Returns false
* if even one element passed to the called function returns false.
*/
function every(collection, func){
var trueBool = true;
    if (typeof(func) !== 'function'){
         filter(collection, function(element, index, collection){
             if (collection[index] === false){
                 trueBool = false;
             }
             return true;
         });
    return trueBool;
        
    }
    if(Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (func(collection[i], i, collection) === false){
                return false;
            }
        }
    }else {
        for (let key in collection){
            if (func(collection[key], key, collection) === false){
                return false;
            }
        }
    }
    return true;
}
module.exports.every = every;


/**
* some: Calls a function on each value of a collection.  If the collection is an array the element, index, and collection
* are passed into the function.  If the collection is an object the value, its keys, and the collection are passed
* into the function.  If at least one of the return values from the called function are true it returns true. If all of the
* returned values from the called function are false, return false. If a function is not passed in it returns true if at least 
* one of the elements are truthy, otherwise it returns false.
* 
* @param {Object or Array} collection: An object or array whose elements are passed into the called function.
* @param {Function} func: A function that takes the element, index, and collection and returns a boolean value.
* @return:Returns a boolean value of true if at least one of the elements passed into the called function return true. 
* Returns false if all elements passed to the called function returns false.
*/
function some(collection, func){
var trueBool = false;
    if (typeof(func) !== 'function'){
         filter(collection, function(element, index, collection){
             if (collection[index] === true){
                 trueBool = true;
             }
             return false;
         });
    return trueBool;
        
    }
    if(Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (func(collection[i], i, collection) === true){
                return true;
            }
        }
    }else {
        for (let key in collection){
            if (func(collection[key], key, collection) === true){
                return true;
            }
        }
    }
    return false;
}
module.exports.some = some;



/**
* reduce: Calls a function for every element fo the collection by passing the arguments previous result, element,
* and index.  It then uses the return value as the previous result for the next iteration.  If a seed is provided
* it is set as the initial previous result, if it is not provided, the first value from the array is used as the
* initial previous result.  The return value of the final call of the called function is returned after its last 
* iteration.
* 
* @param {Array} array: An array of values to be passed into the called function.
* @param {Function} function: A function that takes previous result, element, and index as arguments and returns a
* value that is used as the previous value for the next iteration.
* @param {Number} seed: a number passed as the first previous value.
* @returm {Number}: Returns the return value of the called function after its last iteration.
*
*/
function reduce(array, func, seed){
    //declare prevResult to the seed value
    var prevResult = seed;
    //declare a startval
    var startVal = 0;
    //if no seed is provided set prevResult to the first value of the array and set the start val to 1
    if(arguments[2] === undefined){
        prevResult = array[0];
        startVal = 1;
    }
    //declare the return val and set it to 0
    var retVal = 0;
    //loop through array 
    for(var i = startVal; i < array.length; i++){
        //set prevResult to the return of the function calling prevResult, element, and index
        prevResult = func(prevResult, array[i], i);
    }
    //return retVal
    console.log(retVal);
    return prevResult;
}
module.exports.reduce = reduce;


/**
* extend: Copies the properties of any number of passed objects to the first object passed as an argument. Returns an
* updated version of the first object.
* 
* @param {Object} objOne: The object that all the other passed objects properties will be copied to.
* @param {Object} objTwo: An object whose properties will be copied to objOne.
* @return {Object}: Returns an updated version of objOne with the new properties copied from objTwo and any subsequent
* object.
*/
function extend(objOne, objTwo){
    for (let i = 1; i < arguments.length; i++){
        for (var key in arguments[i]){
            arguments[0][key] = arguments[i][key];
        }
    }
    return arguments[0];
}
module.exports.extend = extend;