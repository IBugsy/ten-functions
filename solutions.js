"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

//Question 1 isTrue

function isTrue(input){
    return input === true;
}

//Question 2 isFalse

function isFalse(input) {
    return input === false;
}

//Question 3 not

function not(input){
    return !input;
}

//Question 4 addOne

function addOne(input){
    input =Number(input)
    return input + 1;
}

//Question 5 isEven

function isEven(input){
        if(typeof input === 'boolean'){
            return false;
        }
        return input % 2 === 0;
}

//Question 6 isIdentical

function isIdentical(a, b){
    return (a === b) || (a !== b);
}

//Question 7 isEqual
function isEqual(){

}

//Question 8 or
function or(){

}

//Question 9 and
function and(){

}
//Question 10 concat

function concat(a, b) {
    if (
        typeof a === 'string'
        && typeof b === 'string'
    ) {
        return a + b;
    }
    if (
        typeof a === 'number'
        && typeof b === 'number'
    ) {

            return String(a) + String(b);
    }
    if (
        typeof a === 'boolean'
        && typeof b === 'boolean'
    ) {
}
}