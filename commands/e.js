exports.run = async (client, message, args) => {
    const e = client.emojis.find((emoji) => emoji.name == args[0]);
    if(e == null) return message.reply("There's no such emoji!");
    message.channel.send(e);
}