console.log("service-worker.js loaded");

chrome.commands.onCommand.addListener((command, tab) => {
    console.log("command: " + command);
    if (!tab.url.includes('chrome://')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["exec-script.js"]
        });
    }
});
