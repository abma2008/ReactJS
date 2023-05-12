import {exportMessage, exportMessage2} from "./export.mjs"; // if you want to import more than one from the same  file
import Tutorial from './classes.mjs';
import names from './map_filter.mjs';

/**
 * There is something to note here:
 * if you are importing more than one thing from the same file.
 * we can always use curl brackets 
 */
console.log(exportMessage());
console.log(exportMessage2());


// creating an instance of the Tutorial Class:
const import_Tutorial = new Tutorial();

// calling the function HelloWorld() function:
console.log(import_Tutorial.HelloWorld());
//calling the InputValue function:
console.log(import_Tutorial.inputValue('Ahmed'));



// we will be using the filter here:
const filter_names = names.filter((name)=>{
    return name.includes('d')? name: '';
})

// consoling the outcome:
console.log(filter_names);


// Using the same names array with map():

const map_names = names.map((name)=>{
    if(name.includes('d')){
        return 'includes d';
    }
    else {
        return name;
    }
})

// consoling map_names:
console.log(map_names);