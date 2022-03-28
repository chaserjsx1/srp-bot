import Discord from 'discord.js'

export default (serverInfo) => {
    const ip = serverInfo.address.split(':')[0]
    const port = serverInfo.address.split(':')[1]
    return new Discord.MessageEmbed()
        .setColor('#c15f6e')
        .setTitle('===> CLICK HERE TO JOIN THE SERVER <===')
        .setDescription(serverInfo.description)
        .setURL(`https://acstuff.ru/s/q:race/online/join?ip=${ip}&httpPort=${port}`)
        .setAuthor(serverInfo.name)
        .setThumbnail('https://cdn.discordapp.com/attachments/848226875272724480/873991141299736576/OEM_v5.png')
        .addField('Status:', serverInfo.status, true)
        .addField('\u200b', '\u200b', true)
        .addField('Players:', `:video_game: ${serverInfo.currentPlayers || 0}/${serverInfo.maxPlayers || 0}`, true)
        .addField('Location:', serverInfo.country, true)
        .addField('\u200b', '\u200b', true)
        .addField('Address:', `:desktop: \`${serverInfo.address}\``, true)
        .setTimestamp()
}
