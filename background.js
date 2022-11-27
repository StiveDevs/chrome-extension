chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "greetings") {
        console.log(request.source);
    }
});