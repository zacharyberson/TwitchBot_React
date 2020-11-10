import client from './clientHelper.js';
import messages from './messages.js';

const intervals = [];

export const intervalMessage = (target, messageObj) => {
    const interval = setInterval(()=>{
        client.say(target, messageObj.message);
    }, messageObj.interval);

    intervals.push(interval);
}

export const intervalMessages = (target) => {
    messages.forEach((messageObj)=>{
        intervalMessage(target, messageObj);
    });
}

export const stopIntervals = () => {
    intervals.forEach((interval)=> {
        clearTimeout(interval);
    });
}