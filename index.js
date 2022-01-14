const Discord = require("discord.js")
require('dotenv').config();
const fs = require("fs")
const client = new Discord.Client()

fs.readdir("./events/", (err, files) => {
  files.forEach((file) => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split(".")[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))  })
})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("guildMemberAdd", (member) => {
  member.send(
    `Welcome on the server! Please be aware that we won't tolerate troll, spam or harassment.This is a test bot so don't expect much of it (still dummy XD) Have fun 😀`
  )
})

client.on("message", (msg) => {
  if (msg.content === "salam") {
    msg.reply("wa 3alikum el salam !")
  }
})

client.on("message", (msg) => {
  if (msg.content === "stupid bot") {
    msg.reply(" shame on you </3 ")
  }
})

client.on("message", (msg) => {
  if (msg.content === "ur replying to me now ?") {
    msg.reply(" go to hell loser XD")
  }
})

client.on("message", (msg) => {
  if (msg.content === "what is this ?") {
    msg.reply("this is , my friend , is the future :innocent:")
  }
})

client.on("message", (msg) => {
  if (msg.content === "see ya stupid bot") {
    msg.reply("yeah yeah, oh my god what a loser uuhhh..")
  }
})

client.on("message", (msg) => {
  if (msg.content === "i'm talking with you no?") {
    msg.reply(" I Can't hear you...")
  }
})

client.on("message", (message) => {
  if (message.content.startsWith("!kick")) {
    const member = message.mentions.members.first()

    if (!member) {
      return message.reply(
        `Who are you trying to kick? You must mention a user.`
      )
    }

    if (!member.kickable) {
      return message.reply(`I can't kick this user. Sorry!`)
    }

    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was kicked.`))
      .catch((error) => message.reply(`Sorry, an error occured.`))
  }
})
client.login(process.env.DISCORD_TOKEN)
