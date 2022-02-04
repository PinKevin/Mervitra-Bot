const { Collection } = require('discord.js');
const cdCollection = new Collection;

module.exports = {
    name: 'ping',
    description: 'Command untuk !ping',
    execute(message) {
        if (cdCollection.has(message.author.id)) {
            message.reply('tunggu 10 detik lagi sebelum bermain ping-pong dengan bot!').then(msg => {
                msg.delete({ timeout: 1000 * 2 });
            }).catch();
        }
        else {
            setTimeout(() => {
                message.reply('pong!');
            }, 300);
            cdCollection.set(message.author.id);
            setTimeout(() => {
                cdCollection.delete(message.author.id);
            }, 1000 * 10);
        }
    },
};