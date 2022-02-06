const { Client, Collection } = require('discord.js');

const fs = require('fs');
const { token } = JSON.parse(fs.readFileSync('./config.json'));

const client = new Client;

const PREFIX = require('./commands/bot-info.json').prefix;

// impor command dari luar
const commands = new Collection;
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of files) {
    const command = require(`./commands/${file}`);
    commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('ready', () => {
    client.user.setActivity('everyone\'s heart', {
        type: 'LISTENING',
    }).catch(console.error);
});

client.on('message', message => {
    const args = message.content.substring(PREFIX.length).split(' ');

    switch (args[0]) {
        case 'p':
        case 'ping':
            commands.get('ping').execute(message);
            break;
        case 'i':
        case 'info':
            commands.get('info').execute(message, args);
            break;
        case 'help':
            commands.get('help').execute(message);
            break;
        case 'cc':
        case 'clear-chat':
            commands.get('clear-chat').execute(message, args);
            break;
    }
});

client.login(token);