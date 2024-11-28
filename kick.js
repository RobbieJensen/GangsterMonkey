module.exports = {
    name: 'kick',
    description: 'Kicks a user from the server.',
    async execute(message, args) {
        if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('You do not have permission to kick members.');
        const user = message.mentions.members.first();
        if (!user) return message.reply('Please mention a user to kick.');
        
        try {
            await user.kick();
            message.channel.send(`${user.user.tag} has been kicked.`);
        } catch (error) {
            message.reply('There was an error kicking the user.');
        }
    },
};
