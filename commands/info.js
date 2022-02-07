const { MessageEmbed } = require('discord.js');
const botInfo = require('../bot-info/general-info.json');
const botFooter = `${botInfo.name} - ${botInfo.version}`;

module.exports = {
    name: 'info',
    description: 'Command untuk !info',
    execute(message, args) {
        if (!args[1]) {
            const infoEmbed = new MessageEmbed()
                .setTitle('Command yang bisa digunakan')
                .addField('!info author', 'Menampilkan pembuat bot')
                .addField('!info version', 'Menampilkan versi bot')
                .addField('!info all', 'Menampilkan seluruh informasi bot')
                .setColor('0CECDD')
                .setFooter(botFooter);
            message.channel.send(infoEmbed);
        }
        else {
            // apabila !info author
            if (args[1] === 'author') {
                message.channel.send(`Bot dibuat oleh ${botInfo.author}`);
            }
            // apabila !info version
            else if (args[1] === 'version') {
                message.channel.send(`Versi bot sekarang adalah ${botInfo.version}`);
            }
            else if (args[1] === 'all') {
                const allInfoEmbed = new MessageEmbed()
                    .setTitle('INFORMASI BOT')
                    .setDescription('Mervitra adalah bot yang siap melayani member server ini.')
                    .addField('Nama', botInfo.name, true)
                    .addField('Pembuat', botInfo.author, true)
                    .addField('Versi', botInfo.version, true)
                    .setColor('ffffff')
                    .setFooter(botFooter);
                message.channel.send(allInfoEmbed);
            }
            // selain author dan version
            else {
                message.channel.send('Perintah tidak ditemukan!');
            }
        }
    },
    botFooter,
};

