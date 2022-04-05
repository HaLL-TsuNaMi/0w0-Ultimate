module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music cuwwently pwaying ${message.author}... twy again ÚwÙ?`);

        message.author.send(`You saved the twack ${queue.current.title} | ${queue.current.author} fwom the sewver ${message.guild.name} UwU`).then(() => {
            message.channel.send(`I have sent you the titwe of the music by pwivate messages >:3`);
        }).catch(error => {
            message.channel.send(`Unabwe to send you a pwivate message ${message.author}... twy again ÚmÙ?`);
        });
    },
};