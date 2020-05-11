# More Boolean Methods!

## Installation
```js
require('more-boolean-methods')();
// Done!
```

## Methods

| Method | Description |
| ------ | ----------- |
.random() | Will give you a random boolean
.not() | Will negate the boolean
.stringify() | Will convert the boolean to a string
.numberify() | Will convert the boolean to a number
.arrayify() | Will convert the boolean to an array
.true() | Will return true
.false() | Will return false
.and(boolean) | Will return the 'AND' value of the two booleans
.or(boolean) | Will return the 'OR' value of the two booleans
.equals(boolean) | Will return true if both booleans are equal
.xor(boolean) | Will return the 'XOR' value of the two booleans

## Examples

```js
true.and(false) // expected output: false
false.or(true) // expected output: true
true.not() // expected output: false
true.false() // expected output: false
true.stringify() // expected output: 'true'
```

## Infos

This module was kinda made as a joke, but you're free to use it anyways!
