module.exports = {
    name: 'fact',
    description: 'Provides a random fact.',
    execute(message) {
        const facts = [
            'Honey never spoils.',
            'A group of flamingos is called a "flamboyance".',
            'Bananas are berries, but strawberries are not.',
            'A cloud can weigh more than a million pounds.',
        ];
        const fact = facts[Math.floor(Math.random() * facts.length)];
        message.channel.send(fact);
    },
};
