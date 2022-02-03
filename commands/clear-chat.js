module.exports = {
    name: 'clear-chat',
    description: 'Command untuk !clear-chat',
    execute(message, args) {
        if (!args[1]) {
            message.reply('masukkan jumlah chat yang akan dihapus setelah !clear-chat');
        }
        else {
            message.channel.bulkDelete(args[1]);
        }
    },
};