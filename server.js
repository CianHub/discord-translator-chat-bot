const express = require("express");
const axios = require('axios');
const Discord = require('discord.js');

// Your YANDEX API KEY here
const YANDEX_API_KEY = '';
const PORT = 3000;

const client = new Discord.Client();

client.on('message', msg => {
    axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate', {
        params: {
            key: YANDEX_API_KEY,
            text: msg.content,
            lang: 'en'
        }
    }).then(res => {
        if (res.data.text[0] !== msg.content) {
            msg.reply(res.data.text[0]);
        }
    });
});

// Discord Bot token 
client.login('NTUxMzczMzE5MDMxNzUwNjU5.D1wB_A.bYRhoD98yufckxL-MtA40XOktYA');

const app = express();

app.listen(PORT);