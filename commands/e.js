exports.run = async (client, message, args) => {
    if(args[0] == null) return message.reply("Must provide emoji name!");
    const e = client.emojis.find((emoji) => emoji.name == args[0]);
    if(e == null) return message.reply("There's no such emoji!");
    message.channel.send(`${e}`);
    //if(args[1] == "d") message.delete(0);
}