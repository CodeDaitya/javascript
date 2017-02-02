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

