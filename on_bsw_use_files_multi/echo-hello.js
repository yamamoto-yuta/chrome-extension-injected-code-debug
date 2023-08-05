// // Uncaught SyntaxError: Unexpected token 'export'
// export const echoHello = () => {
//     console.log('Hello from injected code!');
// };

// files: ["exec-script.js", "echo-hello.js.js"]
// 初回実行時のみ次のエラーが出た: // Uncaught ReferenceError: echoHello is not defined
// 2回目以降はちゃんと動いた
// files: ["echo-hello.js", "exec-script.js"]
// 初回からちゃんと動いた
function echoHello() {
    console.log('Hello from injected code!');
}