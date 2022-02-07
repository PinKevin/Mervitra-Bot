// 'use strict';
const { Client, Collection } = require('discord.js');

const fs = require('fs');
const { token } = JSON.parse(fs.readFileSync('./config.json'));

const client = new Client;

const PREFIX = require('./bot-info/general-info.json').prefix;

// impor command dari luar
const commands = new Collection;
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of files) {
    const command = require(`./commands/${file}`);
    commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Ready!');

    client.user.setActivity('everyone\'s heart', {
        type: 'LISTENING',
    }).catch(console.error);
});

// client.on('guildMemberAdd', member => {
//     const lobbyChannel = member.guild.channels.cache.find(ch => ch.name === 'lobby');
//     if (!lobbyChannel) return;
//     lobbyChannel.send(`Welcome to the server, ${member}`).catch(console.error);
// });

client.on('message', message => {
    const args = message.content.substring(PREFIX.length).split(' ');

    switch (args[0].toLowerCase()) {
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
        case 'k':
        case 'kick':
            commands.get('kick').execute(message, args);
            break;
    }
});

client.login(token);