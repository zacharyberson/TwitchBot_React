import ReactDOM from 'react-dom';
import Audio from './components/Audio.js';
import Image from './components/Image.js';
import NumUtil from './utility.js';
import client from './clientHelper.js';
import woahClip from '../media/sound/woah.wav';
import koroImage from '../media/image/koro_flat.png';

const rollDice = (target, context, query) => {
    const sides = NumUtil.isInt(query) ? +query : 6;
    const num = Math.floor(Math.random() * sides) + 1;
    client.say(target, `${context['display-name']} rolled a ${num}`);
}

const woah = (target, context, query) => {
    ReactDOM.render(<Audio source={woahClip}/>, document.getElementById('root'));
}

const blank = (target, context, query) => {
    ReactDOM.render(<Image source={koroImage} timeout={3000}/>, document.getElementById('root'));
}

const displayCommands = (target, context, query) => {
    let list = '';
    Object.keys(commands).forEach((value) => {
        list = list + ', ' + value;
    });
    list = list.slice(2);

    client.say(target, `Bot Commands: ${list}`);
}

const commands = {
    '!roll': rollDice,
    '!woah': woah,
    '!blank' : blank,
    '!botcommands' : displayCommands
};

export default commands;