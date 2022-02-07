const { Collection } = require('discord.js');
const cdCollection = new Collection;

module.exports = {
    name: 'ping',
    description: 'Command untuk !ping',
    execute(message) {
        if (cdCollection.has(message.author.id)) {
            message.channel.bulkDelete(1);
            message.reply('tunggu 10 detik lagi sebelum bermain ping-pong dengan bot!').then(msg => {
                msg.delete({ timeout: 1000 * 2 });
            }).catch();
        }
        else {
            setTimeout(() => {
                message.channel.bulkDelete(1);
                message.reply('pong!').then(msg => {
                    msg.delete({ timeout: 1000 * 2 });
                });
            }, 300);
            cdCollection.set(message.author.id);
            setTimeout(() => {
                cdCollection.delete(message.author.id);
            }, 1000 * 10);
        }
    },
};