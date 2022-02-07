module.exports = {
    name: 'kick',
    description: 'Command untuk !kick',
    execute(message) {
        if (message.member.roles.cache.find(r => r.name === 'Admin')) {
            const userKick = message.mentions.users.first();

            if (userKick) {
                const memberKick = message.guild.member(userKick);

                if (memberKick) {
                    memberKick.kick('Kamu telah mengecewakan hati admin dan moderator sehingga di-kick dari server').then(() => {
                        message.channel.bulkDelete(1);
                        message.reply(`${userKick.tag} berhasil di-kick`);
                    }).catch(err => {
                        message.channel.bulkDelete(1);
                        message.reply('Member tidak bisa di-kick!');
                        console.log(err);
                    });
                }
            }
            else {
                message.channel.bulkDelete(1);
                message.reply('User tidak ditemukan');
            }
        }
        else {
            message.channel.bulkDelete(1);
            message.reply('siapa kamu wahai kisanak, kamu terlarang menggunakan command ini');
        }
    },
};