/**
 * Created by rastwe on 3/19/2017.
 */
/* Function calls: simple replacement for arguments object */
/*function myFn(...args) {
	console.dir(args);
}
myFn(0, 1, 2);*/

/* Array literals: Take an array and use its contents as a parameter list */
/*function spreads2(x, y, z) {
	console.dir(arguments);
}
let x = [3, 4, 5];
spreads2(...x);*/

/* concatenate two arrays */
/*
let y = [6, 7, 8];
y = [...x, ...y];
console.dir(y);*/

/* Only works on iterable objects. This won't give you
 * an error, just an empty Array. */
/*let obj = {key: 'value'},
	array = [...obj];
console.dir(array);*/
