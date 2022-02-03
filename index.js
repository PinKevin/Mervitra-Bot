const { Client } = require('discord.js');

const fs = require('fs');
const { token } = JSON.parse(fs.readFileSync('./config.json'));

const client = new Client;

const PREFIX = '!';

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    const args = message.content.substring(PREFIX.length).split(' ');

    switch (args[0]) {
        case 'ping':
            message.reply('pong!');
    }
});

client.login(token);