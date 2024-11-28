module.exports = {
    name: 'quote',
    description: 'Sends an inspiring quote.',
    execute(message) {
        const quotes = [
            '“The only way to do great work is to love what you do.” - Steve Jobs',
            '“Success is not the key to happiness. Happiness is the key to success.” - Albert Schweitzer',
        ];
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        message.channel.send(quote);
    },
};
