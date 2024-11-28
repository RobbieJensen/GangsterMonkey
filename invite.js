module.exports = {
    name: 'invite',
    description: 'Generates an invite link for the bot.',
    execute(message) {
        const inviteLink = `https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&scope=bot&permissions=8`;
        message.channel.send(`Here is the invite link for the bot: ${inviteLink}`);
    },
};
