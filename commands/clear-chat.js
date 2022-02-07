module.exports = {
    name: 'clear-chat',
    description: 'Command untuk !clear-chat',
    execute(message, args) {
        const role = message.member.roles.cache.find(r => r.name === 'Admin');
        if (role) {
            if (!args[1]) {
                message.reply('masukkan jumlah chat yang akan dihapus setelah !clear-chat');
            }
            else {
                message.channel.bulkDelete(args[1]);
            }
        }
        else {
            message.reply('siapa kamu wahai kisanak, kamu terlarang menggunakan command ini');
        }
    },
};