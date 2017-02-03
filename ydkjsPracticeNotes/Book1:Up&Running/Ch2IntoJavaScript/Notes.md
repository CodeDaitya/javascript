# Into JavaScript

## Values & Types

Available built-in types:  

**string**  
**number**  
**boolean**  
**null** and **undefined**  
**object**  
**symbol**(new to ES6)  

**typeof** operator in JavaScript can be used to learn the type of value a variable holds.  
  
```javascript
var a = 42;
typeof a; //**number**

a = "42";
typeof a; //**string**

a = **true**; //**boolean**

a = null; // _undefined_

a = undefined; // _undefined_
```  
## Objects  

It refers a compound value whose _properties_(named locations) can be set. These _properties_ hold values of their own.  
  
```javascript
	var obj = {
		a: "hello world",
		b: 32,
		c: **true**
	};

	obj.a; //"hello world"
	obj.b; //32
	obj.c //**true**
```  
The properties of an object can be accesed using a dot( . ) notation as above, or using a bracket notation,  

```javascript
	obj["a"]; //"hello world"
```  

### Array  

An object that hold values of different types in numerically indexed postions.  

```javascript
	var arr = ["val1", val2, bool1];
	arr[0]; //"val1"
	arr.length; //3
	typeof.arr; //object
```  

As can be seen in the above code, an array is a type of object only. It is evident from the possibility of accessing a property (.length), and from
the value returned by the **typeof** operator.  

### Functions  

This another object subtype  

```javascript
	function func(){
		return value;
	}
	func.greet = "hello world";
	typeof func; //object
	typeof func() // typeof value
```  

## Comparison

The result of any comparison is a boolean value(**true** or **false**).

### Coercion

There are two types of coercions - _explixit_ and _implicit_.
Explicit coercion is simply sepcified in the script that certain coversion has to occur, implicit coercion is when a coercion happens due to some
internal handling of some operation.  
Majority of the cases constructed with type coercion are sensible and understandable, and can be used to improve readability of the code(_how_?).

### Truthy&Falsy  
"Falsy" values in JavaScript:
	* " "(empty string)
	* 0, -0, NaN(invalid number)
	* _null_, _undefined_
	* _false_

"Truthy" values in JavaScript, anything that isn't "falsy":
	* "hello"
	* 45
	* _true_
	* [],[1,"2",3](arrays)
	* {}, {a:32}(objects)
	* function func(){} (functions)

The non-boolean values only follow this if they are coerced to a boolean.

### Equality

Four equality operators: ==, ===, !=, and !==.

== checks for value equality with coercion allowed, and === checks value equality without coercion allowed. === is called "strict equality".

### Inequality

The <, >, <=, and >= operators are used for inequality referred to as to in the specification as "relational comparisson".

Similar rules regarding coercion apply to the inequality operators. There are no "strict inequality" operators that would disallow coercion the same
the same way === "strict equality" does.

## Function Scopes

Variable scopes work pretty much the same in JavaScript as in many other popular languages like C. There are, however, a few things to look out for.  

### Auto-global Variable

If an attempt to set an undefined variable is made, one ends up making a variable in the top-level global scope(bad!).  

```javascript

function func(){
	a = 1;	//`a` not formally declared
}

func();
a;	//1, auto-global variable
```  

Very bad practice, not to be followed!!  

### let  

ES6 allows decalaration of a variable belonging to individual blocks using the **let** keyword.  

```javascript
function func(){
	var a = 1;
	if(a>=1){
		let b = 2;
		while(b<5){
			let c = b*2;
			b++;
			console.log(a+c);
		}
	}
}

func()		// 5 7 9
```  

## Strict Mode

ES5 added a "strict mode" to the language to impose certain restrictions meant to keep the code to a safer set of guidelines. It also makes the code
more optimizable by the engine.  
A specific function can be set to "strict mode",  
```javascript

function func(){
	"use strict";
	//this is strict mode
}

//this isn't strict mode
```  

or an entire file as in,  
```javascript

"use strict";

function func(){
	//this is strict mode
}

//this is strict mode
```  

Strict mode doesn't allow implicit auto-global variables from omitting `var`.  

```javascript
function func(){
	"use strict";
	a = 1;		//`var` missing, ReferenceError
}

func();
```  

Turning on the strict mode may throw up a lot of errors, but shouldn't be seen as a deterrent. Rather it should be seen as there are some things in
the code that needs to be fixed. It is recommended.  


