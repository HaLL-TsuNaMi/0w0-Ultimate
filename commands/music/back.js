module.exports = {
    name: 'back',
    aliases: ['previous, b'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music cuwwently pwaying ${message.author}... twy again ÚwÙ?`);

        if (!queue.previousTracks[1]) return message.channel.send(`Thewe was no music pwayed befowe ${message.author}... twy again ÚwÙ?`);

        await queue.back();

        message.channel.send(`Pwaying the **pwevious** track UwU`);
    },
};