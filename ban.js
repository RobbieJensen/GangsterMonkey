module.exports = {
    name: 'ban',
    description: 'Bans a user from the server.',
    async execute(message, args) {
        if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('You do not have permission to use this command.');
        const user = message.mentions.members.first();
        if (!user) return message.reply('Please mention a user to ban.');
        try {
            await user.ban({ reason: args.slice(1).join(' ') });
            message.channel.send(`${user.user.tag} has been banned.`);
        } catch (error) {
            message.reply('There was an error banning this user.');
        }
    },
};
