function echoBar() {
    console.log("bar");
}

console.log("Alt + x pressed");
echoBar();

// Uncaught SyntaxError: Cannot use import statement outside a module
import { echoHello } from "./echo-hello.js";
echoHello();