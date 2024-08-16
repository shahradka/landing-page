const {SESSION_STORAGE_LOAD} = require("../constants/environments");
const { sendMessageToRemote } = require("../message");

const loadApp = () => {
   sessionStorage.setItem(SESSION_STORAGE_LOAD, "1");
   sendMessageToRemote(SESSION_STORAGE_LOAD, "1");
}

const unLoadApp = () => {
    sessionStorage.setItem(SESSION_STORAGE_LOAD, "0");
    sendMessageToRemote(SESSION_STORAGE_LOAD, "0");
 }

 const getAppState = () => {
    return sessionStorage.getItem(SESSION_STORAGE_LOAD);
 }


 module.exports = {
    unLoadApp,
    loadApp,
    getAppState
 }