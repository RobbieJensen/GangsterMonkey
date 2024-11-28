module.exports = {
    name: '8ball',
    description: 'Answers a yes/no question.',
    execute(message, args) {
        if (!args.length) return message.reply('Please ask a question.');
        const responses = [
            'Yes.',
            'No.',
            'Maybe.',
            'Ask again later.',
            'Definitely not.',
            'Absolutely.',
            'It is certain.'
        ];
        const response = responses[Math.floor(Math.random() * responses.length)];
        message.channel.send(response);
    },
};
