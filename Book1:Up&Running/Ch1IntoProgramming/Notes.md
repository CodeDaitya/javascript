# Into Programming

JavaScript has all the basic building blocks like variables, operators, flow control statements etc. almost similar to most other programming
languages. But one has to be careful still especially when dealing with operators. Other than the usual arithmetic and logical operators
JavaScript has two additional operators for equality and not-equals.

Strict equal === and Not strict equal !==.

For the usual ==  

	` 2=='2' `  

returns a boolean **true**. Now it is clear that the two values can't be the same beacuse the expression on the right of the operator is a `Number`,
while that on the left is a string. So what happens here is that JavaScript does a little trick called "type coercion" where it makes an effort to
carry out an unmatched comparisson by changing one of the expression to an appropriate type and returns a boolean value based on that comparisson.
This also happens in the cases when someone tries to add/subtract a **string** and a **number**.

	` 2 + '2' = "22"		23 - '3' = '2' `  

This feature of JavaScript can cause many problems and cause bugs if not handled carefully. It needs some attention while dealing with these four
comparison operators and other cases of type coercion. Once understood clearly, it can be a really powerful arrow up your quiver(not quite sure how
yet).

## Output

`console.log()`  

log() function call takes the variable to be printed to the console.  
console. is an object reference where log() function is located.

`alert()`  

It shows a pop-up "OK" box with the value of the variable, or the string/numeric literal passed. It cannot output multiple values without interrupting
the browser.

## Input

Common way of getting user input is to take values in fields in an HTML page from the user and then read these values with JavaScript.

`prompt()`  

Pops-up with a text message string passed as argument and takes an input value from the user. The input value is stored once the user click the "OK"
button in a variable to which the function return value is assigned. The user can also skip the input by clicking "Cancel".

```javascript
price = prompt("Quote yuor price:");
console.log(price);
```  

## Values and Types

JavaScript has built-in types for each of the primitive value types,  
  
**number**, for numeric values  
**string**, to print value on the screen or to store characters(single chareacter, word, sentences, number strings)  
**boolean**, for making decisions (**true** or **false**)  

Values included directly in code are called literals. **string** literals are enclosed in double-quotes(" ") or in single-quote(' ') based on the
programmers preference. **numeric** or **boolean** literals are presented as is.

### Converting between types

A number when printed to screen is converted to string. This is called _coercion_. It happens when a numeric operation is performed on data from a
user input in forms which is a string value and has to be converted into a numeric value. This is done automatically and is therefore _implicit_.  

It is possible to explicitly coerce a value.  

```javascript
a = "22";
b = Numeric(a) + 23;
c = a + 23;
console.log(b); //output: 45
console.log(c); //output: "2223"
```  

#### Pitfall

"2" == 2 evaluates to true because it is loosely equal in JS context. So one has to be careful with these implicit coercions dealing with different
types of values.

## Variables

JavaScript uses dynamic typing appraoch, that is, a variable can hold any type of value without any type enforcement. JavaScript is an _untyped_
scripting language.  
A variable is declared using a **var** keyword without specifying its type.  

```javascript
var a;
```  

This variable can take any type of value, different types of values during to program run.  

## Constants in JavaScript

Constants are usually capitalized with multiple words seperated by an _underscore_(_).  

```javascrupt
var TAX_RATE=0.15;
```  

ES6 scripting standard includes a new way of declaring a constant by using **const** instead of **var**.  

```javascript
const TAX_RATE=0.15;
```
