const {APP_PLACEHOLDER_ID, REMOTE_APP_URL} = require("../constants/environments");

const sendMessageToRemote = (storageName, message) => {
    document.querySelector(`#${APP_PLACEHOLDER_ID}`).contentWindow.postMessage({[storageName]:typeof message === "object"?
        JSON.stringify(message) : message
    }, REMOTE_APP_URL);
}

export {
    sendMessageToRemote
}