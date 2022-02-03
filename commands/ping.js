module.exports = {
    name: 'ping',
    description: 'Command untuk !ping',
    execute(message) {
        message.reply('pong!');
    },
};