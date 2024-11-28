module.exports = {
    name: 'poll',
    description: 'Creates a yes/no poll.',
    execute(message, args) {
        const question = args.join(' ');
        if (!question) return message.reply('Please provide a question for the poll.');

        const pollEmbed = {
            title: 'Poll',
            description: question,
            color: 'BLUE',
            footer: { text: 'React with 👍 for Yes, 👎 for No' },
        };
        message.channel.send({ embeds: [pollEmbed] }).then(pollMessage => {
            pollMessage.react('👍');
            pollMessage.react('👎');
        });
    },
};