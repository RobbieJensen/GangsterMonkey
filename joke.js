module.exports = {
    name: 'joke',
    description: 'Tells a random joke.',
    execute(message) {
        const jokes = [
            'Why don’t skeletons fight each other? They don’t have the guts.',
            'I told my wife she was drawing her eyebrows too high. She looked surprised.',
        ];
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        message.channel.send(joke);
    },
};
