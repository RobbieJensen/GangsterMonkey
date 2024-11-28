module.exports = {
    name: 'userinfo',
    description: 'Shows information about a user.',
    execute(message, args) {
        const member = message.mentions.members.first() || message.member;
        message.channel.send(`User: ${member.user.tag}\nJoined: ${member.joinedAt}`);
    },
};
