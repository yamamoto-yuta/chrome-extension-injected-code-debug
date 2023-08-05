// Uncaught SyntaxError: Identifier 'execScript' has already been declared
// const echoBar = () => {
//     console.log("bar");
// };
function echoBar() {
    console.log("bar");
}

console.log("Alt + x pressed");
echoBar();
echoHello();    // Uncaught ReferenceError: echoHello is not defined
