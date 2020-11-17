module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;
  // Ignore DMs
  if (!message.guild) return;

  const responseObject = require("../pressX/responseObject.json");

  //check if message starts with something which we can respond to in a hilarious way
  if (message.author.id == "129665935421210625" && message.content.toLowerCase().includes("wolffe") && Math.floor(Math.random() * 10) == 9) {
    message.reply("Jesteś ty z siebie dumny żaba(specjalnie z małej), masz ty rozum i godność człowieka?");
  } else {
    for (var property in responseObject) {
      if (message.content.toLowerCase().includes(property.toLowerCase())) {
        console.log(property)
        message.channel.send(responseObject[property]);
        return
      }
    }
  }

  const sadge = client.emojis.find((emoji) => emoji.name === "Sadge");
  // message.channel.send(`${poggies}`);
  message.react(sadge.id);

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return message.reply("There's no such command!");

  // Run the command
  cmd.run(client, message, args);
};