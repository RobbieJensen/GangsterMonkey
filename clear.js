module.exports = {
    name: 'clear',
    description: 'Clears a specified number of messages.',
    async execute(message, args) {
        const amount = parseInt(args[0], 10);
        if (isNaN(amount) || amount <= 0 || amount > 100) return message.reply('Please provide a number between 1 and 100.');
        await message.delete();
        await message.channel.bulkDelete(amount, true);
        message.channel.send(`Deleted ${amount} messages.`);
    },
};
