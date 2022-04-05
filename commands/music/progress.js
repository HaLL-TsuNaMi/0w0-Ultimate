module.exports = {
    name: 'progress',
    aliases: ['pbar'],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music cuwwently pwaying ${message.author}... twy again ÚwÙ?`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`Pwaying a wive, no data to display UwU`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};