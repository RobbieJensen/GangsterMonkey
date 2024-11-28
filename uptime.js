module.exports = {
    name: 'uptime',
    description: 'Shows the bot’s uptime.',
    execute(message) {
        const uptime = process.uptime();
        message.reply(`I have been online for ${Math.floor(uptime / 60)} minutes.`);
    },
};
