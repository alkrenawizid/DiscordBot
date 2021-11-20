// Import axios
const axios = require('axios');

// Initialize dotenv
require('dotenv').config();

// Import discord.js
const Discord = require('discord.js');

// Create new client
const client = new Discord.Client();



async function getMeme() {
    const res = await axios.get('https://memeapi.pythonanywhere.com/');
    return res.data.memes[0].url;
}

async function getLocation() {
    const res = await axios.get('https://freegeoip.app/json/');
    return res.data.country_name;
}

async function getIP() {
    const res = await axios.get('https://api.ipify.org/?format=json');
    return res.data.ip;
}

async function getDog() {
    const res = await axios.get('https://random.dog/woof.json');
    return res.data.url;
}

async function getCat() {
    const res = await axios.get('https://catfact.ninja/fact');
    return res.data.fact;
}

async function doSomething() {
    const res = await axios.get('https://www.boredapi.com/api/activity');
    return res.data.activity;
}


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
    switch (msg.content) {
        // Bot Command
        case "!bot":
            msg.reply("I, however, am not a human. Just a bot (a simple bot, with only a few tricks up my metaphorical sleeve). But I’m still happy you’re here!");
            break;
        // Ping Command
        case "!ping":
            msg.reply("Pong!");
            break;

        // Meme Command
        case "!meme":
            msg.channel.send("Here's your meme!"); //Replies to user command
            const img = await getMeme(); //fetches an URL from the API
            msg.channel.send(img); //send the image URL
            break;

        // Location Command
        case "!location":
            msg.channel.send("Here's your Location!"); //Replies to user command
            const location = await getLocation(); //fetches an URL from the API
            msg.channel.send(location); //send the image URL
            break;

        // Get IP Command
        case "!ip":
            msg.channel.send("Here's your IP!"); //Replies to user command
            const ip = await getIP(); //fetches an URL from the API
            msg.channel.send(ip); //send the image URL
            break;   

        // Random dog image Command
        case "!dog":
            msg.channel.send("Here's your random dog image!"); //Replies to user command
            const dog = await getDog(); //fetches an URL from the API
            msg.channel.send(dog); //send the image URL
            break;

        // Get random cat facts Command
        case "!cat":
            msg.channel.send("Here's your random cat fact!"); //Replies to user command
            const cat = await getCat(); //fetches an URL from the API
            msg.channel.send(cat); //send the image URL
            break;

        // Get random activity Command
        case "!activity":
            msg.channel.send("Here's your random activity!"); //Replies to user command
            const activity = await doSomething(); //fetches an URL from the API
            msg.channel.send(activity); //send the image URL
            break;

    }
})

// Login bot using token
client.login(process.env.CLIENT_TOKEN);