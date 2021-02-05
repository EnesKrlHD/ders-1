const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    client.user.setActivity('Ders #1', {
        type: "WATCHING" // COMPETING yarışmasında yarışıyor Durumu Yapar WATCHING İzliyor Durumu Yapar STREAMING yayında Durumu Yapar LISTENING Dinliyor Durumu Yapar PLAYING Oynuyor Durumu Yapar CUSTOM_STATUS Sadece Mesaj Yazar
        // url: "" STREAMING Yaparsanız Buranın // Parentezini Falan Silin
    })
    console.log(`${client.user.tag} Adlı Bot Giriş Yaptı!!`)
})

client.on('message', message => {
 if(message.author.bot) return;
 if(message.content == "deneme") {
  message.channel.send(`X CyberKing X Kanalına Abone Olun`) //message.reply Olursa Mesajı Yazan Kişiyi Etiketleyerek Atar message.channel.send Tek Mesaj Atar
 };
});

client.login("NzY0NTA2OTY2NDQxMTk3NTk4.X4HQmA.kY1xmdL75KvfQcywL7D24bKlGyQ")