module.exports = {
    name: 'filter',
    aliases: ['f'],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music cuwwently pwaying ${message.author}... twy again ÚwÙ?`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Pwease specify a vawid fiwter to enable ow disabwe ${message.author}... twy again ÚwÙ?\n${actualFilter ? `Fiwter cuwwentwy active ${actualFilter} (${client.config.app.px}fiwter ${actualFilter} to disabwe it).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`This fiwter doesn't exist ${message.author}... twy again ÚwÙ?\n${actualFilter ? `Fiwter cuwwentwy active ${actualFilter}.\n` : ''}Wist of avaiwabwe fiwters ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`The fiwter ${filter} is now **${queue.getFiltersEnabled().includes(filter) ? 'enabled' : 'disabled'}** ✅\n*weminder the wonger the music is, the wwonger this wiww take. ÚwÙ*`);
    },
};