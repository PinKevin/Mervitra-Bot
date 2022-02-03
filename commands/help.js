const { MessageEmbed } = require('discord.js');
const {
    PREFIX,
    botFooter,
} = require('./bot-info');

module.exports = {
    name: 'help',
    description: 'Command untuk !help',
    execute(message) {
        const embed = new MessageEmbed()
            .setTitle('Command BOT')
            .addField('PREFIX', PREFIX)
            .addField('!help', 'Bantuan untuk penggunaan bot')
            .addField('!ping', 'Command untuk tes bot')
            .addField('!info', 'Menampilkan informasi tentang bot')
            .addField('!clear-chat <count>', 'Menghapus chat terbaru sebanyak <count>')
            .setColor('FFF338')
            .setFooter(botFooter);
        message.channel.send(embed);
    },
};