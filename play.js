module.exports = {
    name: 'play',
    description: 'Plays a song from YouTube.',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply('You need to join a voice channel first.');

        const song = args.join(' ');
        if (!song) return message.reply('Please provide a song name or link.');

        // You can use libraries like `discord.js` and `ytdl-core` to handle music functionality.
        message.reply(`Now playing: ${song}`);
    },
};
