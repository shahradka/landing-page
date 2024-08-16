import { SESSION_STORAGE_GEOLOCATION } from "../constants/environments";

const setGeoLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
            sessionStorage.setItem(SESSION_STORAGE_GEOLOCATION,JSON.stringify({lat:position.coords.latitude, long:position.coords.longitude}));
        });
      } else {
        sessionStorage.setItem(SESSION_STORAGE_GEOLOCATION,JSON.stringify({lat:35, long:59}));
      }
}

const getGeoLocation = () => {
  const geoLocation =  sessionStorage.getItem(SESSION_STORAGE_GEOLOCATION);
  if(!geoLocation)
    return JSON.stringify({lat:35, long:59});
  return geoLocation;
}

export {
  getGeoLocation,
  setGeoLocation
}