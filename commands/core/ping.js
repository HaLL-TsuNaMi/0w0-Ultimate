const ms = require('ms');
client.config = require('../../config');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
		message.channel.send(`Wast pong cawcuwated ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} ago **${client.ws.ping}ms** UwU`);
    },
};