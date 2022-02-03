const { Client, Collection } = require('discord.js');

const fs = require('fs');
const { token } = JSON.parse(fs.readFileSync('./config.json'));

const client = new Client;

const PREFIX = '!';

// impor command dari luar
const commands = new Collection();
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of files) {
    const command = require(`./commands/${file}`);
    commands.set(command.name, command);
}

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