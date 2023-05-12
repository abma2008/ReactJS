/**
 this is the file where we will be creating functions
 to export and use on a different file.
 this export.mjs

 note:
 .mjs is an extension to enable exporting/import modules between files.
 This is one of the methods to enable this feature.
 But as we move on with this course, we  will learn something different.
 m letter is added to notify javascript this is to enable exporting and 
 importing 
 */


 const exportMessage = ()=> 'Hello World';
 const exportMessage2 = () => 'Hello World 2';
// using the key word export to enable using these functions in a different file by using import:
 export {exportMessage, exportMessage2};




 /**
  * export syntax:
  * 1- you can export directly by specifying the word export at the beginning of the function.
  * 2- you can export at the end by writing export default <functionName>
  * 3- in case if you are exporting more than one function or class, you can use export {func1, func2, class, variable} without
  * using the word default.
  */