let _interval;
import moment from 'moment';


const setLastUpdate =  () => {
    sessionStorage.setItem("lastUpdateTime", moment());
    document.querySelector("#last_update_time").innerText = moment(sessionStorage.getItem("lastUpdateTime")).fromNow();


    _interval = setInterval(() => {
        if(sessionStorage.getItem("lastUpdateTime"))
            document.querySelector("#last_update_time").innerText = moment(sessionStorage.getItem("lastUpdateTime")).fromNow();
    }, 60000)
}


const resetLastUpdate = () => {
    sessionStorage.removeItem("lastUpdateTime");

    if(_interval)
    {
        clearInterval(_interval);
    }
}

export {
    setLastUpdate,
    resetLastUpdate
}

