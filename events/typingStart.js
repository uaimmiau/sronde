module.exports = (client, channel, user) => {
    if (user.id == "435817113706561536") {
        const pisze = client.emojis.find(emoji => emoji.name === "pisze");
        channel.send(`${pisze}`);
    }
}