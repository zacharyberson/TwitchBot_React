import ReactDOM from 'react-dom';
import Audio from './components/Audio.js';
import Image from './components/Image.js';
import NumUtil from './utility.js';
import client from './clientHelper.js';
import woahClip from '../media/sound/woah.wav';
import koroImage from '../media/image/koro_flat.png';

const rollDice = (target, query) => {
    const sides = NumUtil.isInt(query) ? +query : 6;
    const num = Math.floor(Math.random() * sides) + 1;
    client.say(target, `You rolled a ${num}`);
}

const woah = (target, query) => {
    ReactDOM.render(<Audio source={woahClip}/>, document.getElementById('root'));
}

const blank = (target, query) => {
    ReactDOM.render(<Image source={koroImage} timeout={3000}/>, document.getElementById('root'));
}

const commands = {
    '!dice': rollDice,
    '!woah': woah,
    '!blank' : blank
};

export default commands;