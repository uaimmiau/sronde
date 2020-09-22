module.exports = (client) => {
    console.log("Reactors: online");
    console.log("Sensors: online");
    console.log("All systems: operational");
    client.user.setPresence({
        game: {
            name: 'Xanax',
            type: 'PLAYING'
        },
        status: 'idle'
    })
    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
}