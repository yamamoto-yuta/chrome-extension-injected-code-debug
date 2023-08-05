import { echoHello } from "./echo-hello.js";

console.log("service-worker.js loaded");

const execScript = () => {
    console.log("Alt + x pressed");
    echoHello();   // Uncaught ReferenceError: echoHello is not defined
};

chrome.commands.onCommand.addListener((command, tab) => {
    console.log("command: " + command);
    if (!tab.url.includes('chrome://')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: execScript
        });
    }
});
