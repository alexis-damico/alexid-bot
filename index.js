    const Discord = require("discord.js");
    const client = new Discord.Client();
    require("dotenv").config();

    client.on("ready", () => {
        console.log("I'm ready !");
    });

    client.on("message", msg => {
        if (msg.content === "bonjour") {
             msg.reply("hello");
        }
    });

    client.on("message", msg => {

        if(!msg.content.startsWith("prefixCmd") || msg.author.bot) return

        const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();
    
        if (command === "bonjour") {
            msg.reply("hello");
        }

    });

    client.on("message", msg => {
        if (msg.content === "salut") {
             msg.reply("hello");
        }
    });

    client.on("message", msg => {

        if(!msg.content.startsWith("prefixCmd") || msg.author.bot) return

        const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();
    
        if (command === "salut") {
            msg.reply("hello");
            }
        });

        client.on("message", msg => {

            if(!msg.content.startsWith("prefixCmd") || msg.author.bot) return
    
            const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    
            const command = args.shift().toLowerCase();
        
            if (command === "hey") {
            msg.reply("hello");
            }
        });

        client.on("message", msg => {

            if(!msg.content.startsWith("prefixCmd") || msg.author.bot) return
    
            const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    
            const command = args.shift().toLowerCase();
        
            if (command === "bonsoir") {
            msg.reply("hello");
            }
        });

            client.login(process.env.BOT_TOKEN);