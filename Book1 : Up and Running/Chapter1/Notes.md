## Notes

JavaScript has all the basic building blocks like variables, operators, flow control statements etc. almost similar to most other programming
languages. But one has to be careful still especially when dealing with operators. Other than the usual arithmetic and logical operators
JavaScript has two additional operators for equality and not-equals.

Strict equal `===` and Not strict equal `!==`.

For the usual `=='

	`2=='2'`

returns a boolean `true`. Now it is clear that the two values can't be the same beacuse the expression on the right of the operator is a `Number`,
while that on the left is a string. So what happens here is that JavaScript does a little trick called "type coercion" where it makes an effort to
carry out an unmatched comparisson by changing one of the expression to an appropriate type and returns a boolean value based on that comparisson.
This also happens in the cases when someone tries to add/subtract a `String` and a `Number`.

	`2 + '2' = "22"`	`23 - '3' = '2'`

This feature of JavaScript can cause many problems and cause bugs if not handled carefully. It need some attention while dealing with these four
comparison operators and other cases of type coercion. Once understood clearly, it can be a really powerful arrow up your quiver(not quite how yet).


