/**
 * This is a tutorial to learn the basics of creating a class in javascript.
 * please keep viewing and learning about this because it is important to 
 * understand how it works and also, we will be using it in a different file as well.
 */
// creating a simple class:
class Tutorial{
    color = 'Red';
    HelloWorld =()=>'This is a hello world message in a class';
    inputValue=(value)=>{
        if(value.length > 0){
            return value == this.color? 'We have a match': `Your Value is ${value}, but Color is ${this.color}`;
        }
    }


}

// Creating an instance of the Tutorial Class:

const tutorial = new Tutorial();
// calling the HelloWorld() function:
console.log(tutorial.HelloWorld());



// exporting the Tutorial Class:
// please view the import.mjs to view this export and how it is applied:
export default Tutorial