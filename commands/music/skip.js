module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music cuwwently pwaying ${message.author}... twy again ÚwÙ?`);

        const success = queue.skip();

        return message.channel.send(success ? `Cuwwent music ${queue.current.title} skipped UwU` : `Something went wwong ${message.author}... twy again ÚwÙ?`);
    },
};