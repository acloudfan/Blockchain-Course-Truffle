/**
 * Contract provides mathematical operations for demo purposes only
 **/

 pragma     solidity    ^0.4.6;

 contract Calculator {
     uint   result;

     // constructor
     function Calculator(){
         result = 10;
     }

     // adds number to the result
     function addToNumber(uint num) returns (uint) {
         result += num;
         return result;
     }

     // substract a number from the result
     function substractNumber(uint num) returns (uint) {
         result -= num;
         return result;
     }

    // multiply number to the result
    function multiplyWithNumber(uint num) returns (uint) {
         result *= num;
         return result;
    }

    // divide result by the number
    function divideByNumber(uint num) returns (uint) {
         result /= num;
         return result;
    }

    function getResult() returns (uint) {
        return result;
    }
 }