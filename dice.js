module.exports = {
    name: 'dice',
    description: 'Rolls a six-sided die.',
    execute(message) {
        const roll = Math.floor(Math.random() * 6) + 1;
        message.channel.send(`You rolled a ${roll}!`);
    },
};
