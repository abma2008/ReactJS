/**
 * This is the part where we refresh regarding the syntax of a function
 * before and now, we will be seeing the traditional way and also, the
 * arrow function way here. We will keep it simple and straight forward
 */

// Traditional function:
function add_basic(x,y){
    return x + y;
}
console.log('Result of the Traditional function:\n ============================')
console.log(add_basic(1,2))

// arrow function for the same example as the above:

const add_arrow = (x,y) =>{
    return x + y;
}
console.log('Result of the arrowfunction:\n============================')
console.log(add_arrow(1,2));


// simple arrow function writing of the same example:

const simple_arrow =(x,y)=> x+y;
console.log('Writing the same arrow function in a simple way:\n==========================')
console.log(simple_arrow(1,2))