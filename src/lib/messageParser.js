import { commands, regex } from './commands.js';

const processMessage = (target, context, command) => {
    const commandParts = command.split(' ', 2);
    const commandName = commandParts[0];
    const commandQuery = commandParts.length > 1 ? commandParts[1] : '';

    // try to match entire string to known command regex
    Object.keys(regex).forEach((value) => {
        if (command.match(new RegExp(value))) {
            try {
                regex[value](target, context, command);
                console.log(`* Matched ${value} regex`);
                return;
            } catch (e) {
                console.error(e);
            }
        }
    });

    // try to match first word to known command
    Object.keys(commands).forEach((value) => {
        if (commandName === value) {
            try {
                commands[value](target, context, commandQuery);
                console.log(`* Executed ${value} command`);
                return;
            } catch (e) {
                console.error(e);
            }
        }
    });
}

export default processMessage;