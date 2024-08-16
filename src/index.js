import { LOAD_BUTTON_ID, SESSION_STORAGE_GEOLOCATION } from "./constants/environments";
import {loadApp, getAppState, unLoadApp} from "./appLoad";
import {getGeoLocation, setGeoLocation} from "./geoLocation";
import {setLastUpdate, resetLastUpdate} from "./lastUpdate";
import "./styles.css";
import { sendMessageToRemote } from "./message";


const $button = document.querySelector(`#${LOAD_BUTTON_ID}`);

$button.addEventListener("click", () => {
    const state = getAppState();

    if(Number(state) === 0 || !state)
    {
        loadApp();
        const geoLocation = getGeoLocation();
        sendMessageToRemote(SESSION_STORAGE_GEOLOCATION, geoLocation);
        $button.innerText = "UnLoad App";
    }
    else
    {
        unLoadApp();
        $button.innerText = "Load App";
    }
})


window.addEventListener("load", () => {
    unLoadApp();
    resetLastUpdate();
    setGeoLocation();
})


window.addEventListener("message", (event) => {
    if(event.data.apparent_temperature_max)
    {
        setLastUpdate()
    }
    document.querySelector("#max_temp").innerText = event.data?.apparent_temperature_max || "";
    document.querySelector("#min_temp").innerText = event.data?.apparent_temperature_min || "";
    document.querySelector("#lat").innerText = event.data?.latitude || "";
    document.querySelector("#long").innerText = event.data?.longitude || "";
})
